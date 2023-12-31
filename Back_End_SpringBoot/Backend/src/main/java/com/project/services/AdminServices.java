package com.project.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.dto.StatusA;
import com.project.entity.Teacher;
import com.project.repository.TeacherRepository;

@Service
public class AdminServices {
	@Autowired
	private TeacherRepository teacherRepository;
	
	
	
	
		
	//Get All teacher List at Admin side	
		
	public List<Teacher> getTeacherList(  int adminId ) {
		
		System.out.println("List of all teachers :");
		return teacherRepository.findAll();
		
		}
	
	//create Contest
//	public StatusT createContest( Contest contest,  int teacherId ) {
//		
//		Optional<Teacher> foundTeacher = teacherRepository.findById(teacherId);
//		contest.setTeacher(foundTeacher.get());
//		contestRepository.save(contest);
//		StatusT status = new StatusT();
//		status.setMessage("Contest Created!");
//		status.setStatus(true);
//		
//		return status;
//	}


//Register New Teacher
	public StatusA registerTeacher(Teacher teacher) {
		teacherRepository.save(teacher);
		StatusA status =new StatusA();
		status.setMessage("New Teacher Registered Successfully");
		status.setStatus(true);
		return status;
	}

		
		
	

}
