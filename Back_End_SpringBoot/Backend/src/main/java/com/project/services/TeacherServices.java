package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.dto.StatusT;
import com.project.dto.TeacherLoginStatus;
import com.project.dto.TeacherUpdatePassword;
import com.project.entity.Contest;
import com.project.entity.Teacher;
import com.project.repository.ContestRepository;
import com.project.repository.TeacherRepository;

@Service
public class TeacherServices {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Autowired
	private ContestRepository contestRepository;
	
	//teacher Login
	public ResponseEntity<TeacherLoginStatus> teacherLogin(Teacher teacher) {
		
		Optional<Teacher> foundTeacher = teacherRepository.findByEmailAndPassword(teacher.getEmail(), teacher.getPassword());
		TeacherLoginStatus status = new TeacherLoginStatus();
		
		if(foundTeacher.isPresent()) {
			
			//found
			status.setStatus(true);
			status.setMessage("Successfully Logged In!");
			status.setTeacherId(foundTeacher.get().getTeacherId());
			return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.ACCEPTED);
			
		}else{
			
			//not found
			status.setStatus(false);
			status.setMessage("Wrong Email Or Password!");
			return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.BAD_REQUEST);
			
		}
		
	}
	
	//teacher update password
	public ResponseEntity<TeacherLoginStatus> teacherUpdatePassword(TeacherUpdatePassword newTeacher) {
		
		Optional<Teacher> foundTeacher = teacherRepository.findByTeacherIdAndEmailAndPassword(newTeacher.getTeacherId(),newTeacher.getEmail(), newTeacher.getPassword());
		TeacherLoginStatus status = new TeacherLoginStatus();
		
		if(foundTeacher.isPresent()) {
			
			//found
			Teacher teacher = foundTeacher.get();
			teacher.setPassword(newTeacher.getNewPassword());
			teacherRepository.save(teacher);
			
			status.setStatus(true);
			status.setMessage("Password Changed Successfully");
			status.setTeacherId(foundTeacher.get().getTeacherId());
			return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.ACCEPTED);
			
		}else{
			
			//not found
			status.setStatus(false);
			status.setMessage("Wrong Email Or Password!");
			return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.BAD_REQUEST);
			
		}
		
	}
	
	//create Contest
	public StatusT createContest( Contest contest,  int teacherId ) {
		
		Optional<Teacher> foundTeacher = teacherRepository.findById(teacherId);
		contest.setTeacher(foundTeacher.get());
		contestRepository.save(contest);
		StatusT status = new StatusT();
		status.setMessage("Contest Created!");
		status.setStatus(true);
		
		return status;
	}
	
		//create Contest
		public List<Contest> getContestList(  int teacherId ) {
			
			System.out.println("Teacher Id called "+teacherId);
			Optional<Teacher> foundTeacher = teacherRepository.findById(teacherId);
			
			return contestRepository.findAllByTeacher(foundTeacher.get());
			
		}
	
	

}
