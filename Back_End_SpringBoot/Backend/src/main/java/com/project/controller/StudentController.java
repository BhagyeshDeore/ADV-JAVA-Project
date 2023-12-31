package com.project.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.StudentRegistrationStatus;
import com.project.entity.Contest;
import com.project.entity.Student;
import com.project.repository.ContestRepository;
import com.project.services.StudentServices;

@RestController
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentServices studentServices;
	
	@GetMapping("/student/dashboard")
	public List<Contest> getContest() {

		return studentServices.getContest();
		
	}	
	
	
	@PostMapping("/student/register")
	public ResponseEntity<StudentRegistrationStatus> register(@RequestBody Student student) {
		try {
			int id = studentServices.studentRegister(student);
			StudentRegistrationStatus status = new StudentRegistrationStatus();
			status.setStatus(true);
			status.setMessageIfAny("Registration successful!");
			status.setStudentId(id);
			
			return new ResponseEntity<StudentRegistrationStatus>(status, HttpStatus.ACCEPTED);
				
		}
		catch(Exception e) {
			StudentRegistrationStatus status = new StudentRegistrationStatus();
			status.setStatus(false);
			status.setMessageIfAny(e.getMessage());
	
			return new ResponseEntity<StudentRegistrationStatus>(status,  HttpStatus.BAD_REQUEST);
		}
	}
}
