package com.project.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.dto.ProblemWithStatus;
import com.project.dto.StatusT;
import com.project.dto.TeacherLoginStatus;
import com.project.dto.TeacherUpdatePassword;
import com.project.entity.Attempt;
import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Student;
import com.project.entity.Teacher;
import com.project.repository.AttemptRepository;
import com.project.repository.ContestRepository;
import com.project.repository.ProblemRepository;
import com.project.repository.StudentRepository;
import com.project.repository.TeacherRepository;

@Service
public class TeacherServices {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	@Autowired
	private ContestRepository contestRepository;
	
	@Autowired
	private ProblemRepository problemRepository;
	
	@Autowired
	private AttemptRepository attemptRepository;
	
	@Autowired
	private StudentRepository studentRepository;
	

	
	//teacher Login
	public ResponseEntity<TeacherLoginStatus> teacherLogin(Teacher teacher) {
	    Optional<Teacher> foundTeacher = teacherRepository.findByEmailAndPassword(teacher.getEmail(), teacher.getPassword());
	    TeacherLoginStatus status = new TeacherLoginStatus();

	    if (foundTeacher.isPresent()) {
	        // found
	        status.setStatus(true);
	        status.setMessage("Successfully Logged In!");
	        status.setTeacherId(foundTeacher.get().getTeacherId());
	        status.setTeachStatus(foundTeacher.get().getStatus()); // Set the teacher status

	        return new ResponseEntity<TeacherLoginStatus>(status, HttpStatus.ACCEPTED);
	    } else {
	        // not found
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
	
	//list Contest
	public List<Contest> getContestList(  int teacherId ) {
		
		System.out.println("Teacher Id called "+teacherId);
		Optional<Teacher> foundTeacher = teacherRepository.findById(teacherId);
		
		return contestRepository.findAllByTeacher(foundTeacher.get());
		
	}
	
	//create Problem
	public StatusT createProblem( Problem problem,  int contestId ) {
		
		Optional<Contest> foundContest =  contestRepository.findById(contestId);
		problem.setContest(foundContest.get());
		problemRepository.save(problem);
		StatusT status = new StatusT();
		status.setMessage("Problem Created!");
		status.setStatus(true);
		
		return status;
	}
	
	 public StatusT editProblem(int contestId, int problemId, Problem updatedProblem) {
	        Optional<Problem> optionalExistingProblem = problemRepository.findByContestIdAndProblemId(contestId, problemId);

	        if (optionalExistingProblem.isPresent()) {
	            Problem existingProblem = optionalExistingProblem.get();

	            
	            existingProblem.setTitle(updatedProblem.getTitle());
	            existingProblem.setProblemStatement(updatedProblem.getProblemStatement());
	            existingProblem.setExplanation(updatedProblem.getExplanation());
	            existingProblem.setDifficultyLevel(updatedProblem.getDifficultyLevel());
	            existingProblem.setMarks(updatedProblem.getMarks());
	            existingProblem.setSampleInput(updatedProblem.getSampleInput());
	            existingProblem.setSampleOutput(updatedProblem.getSampleOutput());
	            existingProblem.setTestCase(updatedProblem.getTestCase());
	            existingProblem.setResulTestCase(updatedProblem.getResulTestCase());
	            existingProblem.setSolutionCode(updatedProblem.getSolutionCode());

	           
	            problemRepository.save(existingProblem);

	            
	            StatusT status = new StatusT();
	            status.setMessage("Problem Updated");
	            status.setStatus(true);
	            return status;
	        } 
	        else {
	            
	            StatusT status = new StatusT();
	            status.setMessage("Problem not found");
	            status.setStatus(false);
	            return status;
	        }
	    }


	
	//list Contest
	public List<Problem> getProblemsList(  int ContestId ) {
		
		Optional<Contest> contest = contestRepository.findById(ContestId);
		
		return problemRepository.findAllByContest( contest.get() );
		
	}
	

	//list Contest for particular student with attempts
	public List<ProblemWithStatus> getProblemsListWithAttemptsForStudent(  int ContestId , int StudentId ) {
		
		Optional<Contest> contest = contestRepository.findById(ContestId);
		Optional<Student> student = studentRepository.findById( StudentId);
		
		List<Problem> allProblems = problemRepository.findAllByContest( contest.get() );
		List<Attempt> allAttemptsOfStudents = attemptRepository.findByStudentAndContest(student.get(), contest.get());
		
		List<ProblemWithStatus> problemWithStatus = new ArrayList<ProblemWithStatus>();
		
		
		for( int i = 0 ; i < allProblems.size(); i++ ) {
			
			Problem problem = allProblems.get(i);
			ProblemWithStatus ps = new ProblemWithStatus( problem );
			System.out.print("for problem id in for loop: "+ps.getProblemId());
			
			for(int j = 0 ; j < allAttemptsOfStudents.size(); j++) {
				Attempt a = allAttemptsOfStudents.get(j);
				
				if(a.getProblem() == problem ) {
					ps.setAttempt_id(a.getAttemptId());
					ps.setStatus(a.getStatus());
				}
			}
			
			problemWithStatus.add(ps);
		}
		
		return problemWithStatus;
		
	}

		
	//list Attempt
	public List<Attempt> getAttemptsList(  int ContestId ) {
		
		Optional<Contest> contest = contestRepository.findById(ContestId);
		
		return attemptRepository.findAllByContest( contest.get() );
		
	}
			
		
		
	
	

}
