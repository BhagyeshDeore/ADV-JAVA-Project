package com.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.dto.StudentLoginStatus;

import com.project.entity.Student;
import com.project.repository.StudentRepository;

@Service
public class StudentServices {
	
	@Autowired
	private StudentRepository studentRepository;
	
	
	
	public ResponseEntity<StudentLoginStatus> studentLogin(Student student){
		
		Optional<Student> foundStudent = studentRepository.findByEmailAndPassword(student.getEmail(), student.getPassword());
		StudentLoginStatus status = new StudentLoginStatus();
		
		if(!(foundStudent.isPresent())) {
			//not found
			status.setStatus(false);
			status.setMessage("Wrong Email Or Password!");
			return new ResponseEntity<StudentLoginStatus>(status, HttpStatus.BAD_REQUEST);
			
		}else {
			//found
			status.setStatus(true);
			status.setMessage("Successfully Logged In!");
			status.setStudentId(foundStudent.get().getStudentId());
			status.setName(foundStudent.get().getName());
			return new ResponseEntity<StudentLoginStatus>(status, HttpStatus.ACCEPTED);
		}
		
	}

}
