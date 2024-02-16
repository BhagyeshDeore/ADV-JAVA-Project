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

import com.project.dto.NewContest;
import com.project.dto.NewProblem;
import com.project.dto.StatusT;
import com.project.dto.TeacherLoginStatus;
import com.project.dto.TeacherUpdatePassword;
import com.project.entity.Attempt;
import com.project.entity.Contest;
import com.project.entity.Contest.ContestTopic;
import com.project.entity.Problem.DifficultyLevel;
import com.project.entity.Problem;
import com.project.entity.Teacher;
import com.project.repository.ProblemRepository;
import com.project.services.TeacherServices;

@RestController
@CrossOrigin
public class TeacherController {
	
	@Autowired
	private TeacherServices teacherServices;
	
	@PostMapping("/teacher/login")
	public ResponseEntity<TeacherLoginStatus> teacherLogin(@RequestBody Teacher teacher) {
		
		ResponseEntity<TeacherLoginStatus> status = teacherServices.teacherLogin(teacher);
		return status;
		
	}
	
	@PostMapping("/teacher/update-password")
	public ResponseEntity<TeacherLoginStatus> teacherUpdatePassword(@RequestBody TeacherUpdatePassword teacher) {
		
		ResponseEntity<TeacherLoginStatus> status = teacherServices.teacherUpdatePassword(teacher);
		return status;
		
	}
	
	@PostMapping("/teacher/create-contest")
	public ResponseEntity<StatusT> createContest(@RequestBody NewContest newContest) {
		
		Contest contest = new Contest();
		contest.setDescription(newContest.getDescription());
		contest.setTitle(newContest.getTitle());
		contest.setTopic(ContestTopic.valueOf(newContest.getTopic()));
		StatusT status = teacherServices.createContest( contest, newContest.getTeacherId());
		return new ResponseEntity<StatusT> (status, HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/teacher/get-contest-list")
	public List<Contest> getContestsList(@RequestParam int teacherId) {

		return teacherServices.getContestList(teacherId);
		
	}
	
	@PostMapping("/teacher/create-problem")
	public ResponseEntity<StatusT> createProblem(@RequestBody NewProblem newProblem) {
		
		Problem problem = new Problem();
		problem.setTitle(newProblem.getTitle());
		problem.setProblemStatement(newProblem.getProblemStatement());
		problem.setExplanation(newProblem.getExplanation());
		problem.setDifficultyLevel(DifficultyLevel.valueOf(newProblem.getDifficultyLevel()));
		problem.setMarks(newProblem.getMarks());
		problem.setSampleInput(newProblem.getSampleInput());
		problem.setSampleOutput(newProblem.getSampleOutput());
		problem.setTestCase(newProblem.getTestCase());
		problem.setResulTestCase(newProblem.getResulTestCase());
		problem.setSolutionCode(newProblem.getSolutionCode());
		
		StatusT status = teacherServices.createProblem(problem, newProblem.getContestId());
		return new ResponseEntity<StatusT> (status, HttpStatus.ACCEPTED);
		
	}
	
	@PostMapping("/teacher/update-problem/{contestId}/{problemId}")
	public ResponseEntity<StatusT> editProblem(@PathVariable int contestId, @PathVariable int problemId, @RequestBody NewProblem updatedProblem) {
	    Problem problemToUpdate = new Problem();
	    problemToUpdate.setTitle(updatedProblem.getTitle());
	    problemToUpdate.setProblemStatement(updatedProblem.getProblemStatement());
	    problemToUpdate.setExplanation(updatedProblem.getExplanation());
	    problemToUpdate.setDifficultyLevel(DifficultyLevel.valueOf(updatedProblem.getDifficultyLevel()));
	    problemToUpdate.setMarks(updatedProblem.getMarks());
	    problemToUpdate.setSampleInput(updatedProblem.getSampleInput());
	    problemToUpdate.setSampleOutput(updatedProblem.getSampleOutput());
	    problemToUpdate.setTestCase(updatedProblem.getTestCase());
	    problemToUpdate.setResulTestCase(updatedProblem.getResulTestCase());
	    problemToUpdate.setSolutionCode(updatedProblem.getSolutionCode());

	    StatusT status = teacherServices.editProblem(contestId, problemId, problemToUpdate);
	    return new ResponseEntity<>(status, HttpStatus.ACCEPTED);
	}


	
	
	@GetMapping("/teacher/get-problem-list")
	public List<Problem> getProblemList(@RequestParam int contestId) {

		return teacherServices.getProblemsList(contestId);
		
	}
	
	@GetMapping("/teacher/get-attempts-list")
	public List<Attempt> getAttemptsList(@RequestParam int contestId) {

		return teacherServices.getAttemptsList(contestId);
		
	}


}
