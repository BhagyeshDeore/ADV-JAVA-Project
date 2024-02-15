package com.project.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.LeaderboardEntry;
import com.project.dto.NewAttempt;
import com.project.dto.NewProblem;
import com.project.dto.StatusT;
import com.project.dto.StudentLoginStatus;
import com.project.entity.Attempt;
import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Student;
import com.project.entity.Attempt.CodingLanguage;
import com.project.entity.Attempt.ProblemAttemptStatus;
import com.project.entity.Problem.DifficultyLevel;
import com.project.services.StudentServices;
import com.project.utils.CodeExecutor;

@RestController
@CrossOrigin
public class StudentController2 {
	
	@Autowired
	private StudentServices studentServices;
	
	
	private CodeExecutor codeExecutor;
	
	@PostMapping("/student/login")
	public ResponseEntity<StudentLoginStatus> studentLogin(@RequestBody Student student){
		
		ResponseEntity<StudentLoginStatus> status = studentServices.studentLogin(student);
		return status;
		
	}
	
	
	@GetMapping("/contest/{contestId}/problems")
    public ResponseEntity<List<Problem>> getProblemsByContestId(@PathVariable int contestId) {
        ResponseEntity<List<Problem>> response = studentServices.getProblemsByContestId(contestId);
        return response;
    }
	
	@GetMapping("/student/attempt")
    public ResponseEntity<Attempt> getAttemptById(@RequestParam  int AttemptId) {
        System.out.println("student/attempt/"+AttemptId+" called");

        Attempt response = studentServices.getAttempt(AttemptId);
        return new ResponseEntity<Attempt>(response, HttpStatus.OK);
    }
	
	
	@PostMapping("/student/attempt-problem")
	public ResponseEntity<StatusT> createProblem(@RequestBody NewAttempt newAttempt) {
		
		Attempt attempt = new Attempt();
		String code = newAttempt.getCode();
		attempt.setCode( code );
		String output;
		//code execution starts here
		try {
			output = codeExecutor.executeJavaCode(code, " 1 2 3");
		}catch(Exception e) {
			System.out.println(e.getMessage());
			output = e.getMessage();
		}
		attempt.setResult(output);
		//code excution ends here
		
		attempt.setLanguage(CodingLanguage.valueOf(newAttempt.getLanguage()));
		attempt.setObtained_marks(newAttempt.getObtainedMarks());
		//attempt.setResult(newAttempt.getResult());
		attempt.setStatus(ProblemAttemptStatus.valueOf(newAttempt.getStatus()));
		

		StatusT status = studentServices.createAttempt(attempt, newAttempt.getProblemId() , newAttempt.getContestId(), newAttempt.getStudentId());
		return new ResponseEntity<StatusT> (status, HttpStatus.ACCEPTED);
		
	}
// copy of previous code
//	@PostMapping("/student/attempt-problem")
//	public ResponseEntity<StatusT> createProblem(@RequestBody NewAttempt newAttempt) {
//		
//		Attempt attempt = new Attempt();
//		String code = newAttempt.getCode();
//		attempt.setCode( code );
//		
//		attempt.setLanguage(CodingLanguage.valueOf(newAttempt.getLanguage()));
//		attempt.setObtained_marks(newAttempt.getObtainedMarks());
//		attempt.setResult(newAttempt.getResult());
//		attempt.setStatus(ProblemAttemptStatus.valueOf(newAttempt.getStatus()));
//
//		StatusT status = studentServices.createAttempt(attempt, newAttempt.getProblemId() , newAttempt.getContestId(), newAttempt.getStudentId());
//		return new ResponseEntity<StatusT> (status, HttpStatus.ACCEPTED);
//		
//	}

	@GetMapping("/problem/{problemId}")
    public ResponseEntity<Problem> getProblemById(@PathVariable int problemId) {
        ResponseEntity<Problem> response = studentServices.getProblemById(problemId);
        return response;
    }
	
	@GetMapping("/contest/{contestId}/leaderboard")
    public ResponseEntity<List<LeaderboardEntry>> getLeaderboardForContest(@PathVariable int contestId) {
        ResponseEntity<List<LeaderboardEntry>> response = studentServices.calculateTotalMarksForContestEntity(contestId);
        return response;
    }
	
	
	
	
	
	
}

