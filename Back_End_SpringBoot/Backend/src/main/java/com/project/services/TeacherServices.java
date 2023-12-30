package com.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.dto.TeacherLoginStatus;
import com.project.entity.Teacher;
import com.project.repository.TeacherRepository;

@Service
public class TeacherServices {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	public ResponseEntity<TeacherLoginStatus> teacherLogin(Teacher teacher) {
		
		Optional<Teacher> foundTeacher = teacherRepository.findByEmailAndPassword(teacher.getEmail(), teacher.getPassword());
		TeacherLoginStatus status = new TeacherLoginStatus();
		
		if(foundTeacher.isEmpty()) {
			//not found
			status.setStatus(false);
			status.setMessage("Wrong Email Or Password!");
			return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.BAD_REQUEST);
			
		}else {
			//found
			status.setStatus(true);
			status.setMessage("Successfully Logged In!");
			status.setTeacherId(foundTeacher.get().getTeacherId());
			return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.ACCEPTED);
		}
		
	}

}
