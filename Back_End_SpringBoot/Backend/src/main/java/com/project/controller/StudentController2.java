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

@RestController
@CrossOrigin
public class StudentController2 {
	
	@Autowired
	private StudentServices studentServices;
	
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
	
	@PostMapping("/student/attempt-problem")
	public ResponseEntity<StatusT> createProblem(@RequestBody NewAttempt newAttempt) {
		
		Attempt attempt = new Attempt();
		attempt.setCode(newAttempt.getCode());
		attempt.setLanguage(CodingLanguage.valueOf(newAttempt.getLanguage()));
		attempt.setObtained_marks(newAttempt.getObtainedMarks());
		attempt.setResult(newAttempt.getResult());
		attempt.setStatus(ProblemAttemptStatus.valueOf(newAttempt.getStatus()));

		StatusT status = studentServices.createAttempt(attempt, newAttempt.getProblemId() , newAttempt.getContestId(), newAttempt.getStudentId());
		return new ResponseEntity<StatusT> (status, HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/problem/{problemId}")
    public ResponseEntity<Problem> getProblemById(@PathVariable int problemId) {
        ResponseEntity<Problem> response = studentServices.getProblemById(problemId);
        return response;
    }
	
	
	
	
}

