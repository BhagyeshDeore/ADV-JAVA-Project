package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.TeacherLoginStatus;
import com.project.entity.Teacher;
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
	
}
