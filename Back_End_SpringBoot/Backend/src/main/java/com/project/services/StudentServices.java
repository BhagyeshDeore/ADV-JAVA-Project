package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.dto.StudentLoginStatus;
import com.project.entity.Contest;

import com.project.entity.Student;
import com.project.entity.Student.StudentStatus;
import com.project.entity.Teacher;
import com.project.repository.ContestRepository;

import com.project.entity.Problem;
import com.project.entity.Student;
import com.project.repository.ContestRepository;
import com.project.repository.ProblemRepository;

import com.project.repository.StudentRepository;

@Service
public class StudentServices {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private ContestRepository contestRepository;

	@Autowired
	private ProblemRepository problemRepository;

	public ResponseEntity<StudentLoginStatus> studentLogin(Student student) {

		Optional<Student> foundStudent = studentRepository.findByEmailAndPassword(student.getEmail(),
				student.getPassword());
		StudentLoginStatus status = new StudentLoginStatus();

		if (!(foundStudent.isPresent())) {
			// not found
			status.setStatus(false);
			status.setMessage("Wrong Email Or Password!");
			return new ResponseEntity<StudentLoginStatus>(status, HttpStatus.BAD_REQUEST);

		} else {
			// found
			status.setStatus(true);
			status.setMessage("Successfully Logged In!");
			status.setStudentId(foundStudent.get().getStudentId());
			status.setName(foundStudent.get().getName());
			return new ResponseEntity<StudentLoginStatus>(status, HttpStatus.ACCEPTED);
		}

	}

	

	public ResponseEntity<List<Problem>> getProblemsByContestId(int contestId) {
		Optional<Contest> contestOptional = contestRepository.findById(contestId);

		if (contestOptional.isPresent()) {
			Contest contest = contestOptional.get();
			List<Problem> problems = problemRepository.findByContest(contest);

			if (!problems.isEmpty()) {
				return new ResponseEntity<>(problems, HttpStatus.ACCEPTED);
			} else {
				// No problems found for the given contest
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		} else {
			// Contest not found
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	public List<Contest> getContest() {

		return contestRepository.findAll();

	}
	
	
	
	public int studentRegister(Student student) throws Exception {
		Optional<Student> ifAlreadyPresent = studentRepository.findByPnr(student.getPnr());
		if(ifAlreadyPresent.isPresent())
			throw new Exception("Student already registered!");
		else {
			student.setEmailverificationStatus(false);
			String email = student.getEmail();
			student.setStatus(StudentStatus.newAccount);
			studentRepository.save(student);
			return student.getStudentId();
		}
	}
	

}
