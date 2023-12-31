package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.NewContest;
import com.project.dto.StatusT;
import com.project.entity.Contest;
import com.project.entity.Teacher;
import com.project.entity.Contest.ContestTopic;
import com.project.repository.TeacherRepository;
import com.project.services.AdminServices;

import com.project.dto.StatusA;
import com.project.dto.NewTeacher;
@RestController
public class AdminController2 {
	
	@Autowired
	private AdminServices adminServices;
	
	
	

	@GetMapping("/admin/getTeacherList")
	public List<Teacher> getTeacherList(@RequestParam int adimnId) {

		return adminServices.getTeacherList(adimnId);
		
	}
	
	

	
	@PostMapping("/admin/teacher-register")
public ResponseEntity<StatusA> registerTeacher(@RequestBody NewTeacher newTeacher) {
		
		Teacher teacher = new Teacher();
		teacher.setName(newTeacher.getName());
		teacher.setEmail(newTeacher.getEmail());
		teacher.setPhoneNumber(newTeacher.getPhoneNumber());
		teacher.setPassword(newTeacher.getPassword());
		StatusA status= adminServices.registerTeacher(teacher);
		return new ResponseEntity<StatusA>(status,HttpStatus.CREATED);
		
		
	}
	
//	 @PostMapping("")
//	    public ResponseEntity<String> updateTeacherStatus(@RequestBody UpdateStatusRequest request) {
//	        Long teacherId = request.getTeacherId();
//	        String status = request.getStatus();
//
//	        String responseMessage = teacherService.updateTeacherStatus(teacherId, status);
//
//	        return ResponseEntity.ok().body(responseMessage);
//	    }
//	}
	
}
