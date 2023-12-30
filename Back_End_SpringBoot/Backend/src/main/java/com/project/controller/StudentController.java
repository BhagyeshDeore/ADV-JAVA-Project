package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Contest;
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
}
