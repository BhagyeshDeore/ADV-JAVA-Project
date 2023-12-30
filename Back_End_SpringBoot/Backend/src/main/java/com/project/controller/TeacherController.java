package com.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.dto.NewContest;
import com.project.dto.StatusT;
import com.project.dto.TeacherLoginStatus;
import com.project.dto.TeacherUpdatePassword;
import com.project.dto.newContest;
import com.project.entity.Contest;
import com.project.entity.Contest.ContestTopic;
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

}
