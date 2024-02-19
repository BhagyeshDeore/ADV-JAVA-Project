package com.project.services;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileWriter;
import java.io.OutputStream;
import java.io.PrintStream;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.regex.MatchResult;

import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import javax.tools.ToolProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.dto.LeaderboardEntry;
import com.project.dto.NewAttempt;
import com.project.dto.StatusT;
import com.project.dto.StudentLoginStatus;
import com.project.entity.Attempt;
import com.project.entity.Contest;

import com.project.entity.Student;
import com.project.entity.Student.StudentStatus;
import com.project.entity.Teacher;
import com.project.entity.Attempt.CodingLanguage;
import com.project.entity.Attempt.ProblemAttemptStatus;
import com.project.repository.AttemptRepository;
import com.project.repository.ContestRepository;

import com.project.entity.Problem;
import com.project.entity.Student;
import com.project.repository.ContestRepository;
import com.project.repository.ProblemRepository;

import com.project.repository.StudentRepository;
import com.project.utils.CodeExecutor;


@Service
public class StudentServices {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private ContestRepository contestRepository;

	@Autowired
	private ProblemRepository problemRepository;
	
	@Autowired
	private AttemptRepository attemptRepository;

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
			status.setStudentStatus(foundStudent.get().getStatus()); // Set the student status
			return new ResponseEntity<StudentLoginStatus>(status, HttpStatus.ACCEPTED);
		}

	}

	
	//get problems json data using contestId
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
	
	public Attempt getAttempt( int AttemptId ) {
		return attemptRepository.findById( AttemptId ).get();
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
	
	//create Attempt
		public StatusT createAttempt( Attempt attempt,  int problemId , int contestIid, int StudentIid) {
			
			Optional<Problem> foundProblem =  problemRepository.findById(problemId);
			attempt.setProblem(foundProblem.get());
			
			Optional<Contest> foundContest  = contestRepository.findById(contestIid);
			attempt.setContest(foundContest.get());
			
			Optional<Student> foundStudent  = studentRepository.findById(StudentIid);
			attempt.setStudent(foundStudent.get());
			
			attemptRepository.save(attempt);
			StatusT status = new StatusT();
			status.setMessage("Problem Attempted!");
			status.setStatus(true);
			status.setOutput( attempt.getResult() );
		
			
			return status;
		}
		
		//get problem data by prolemId
		public ResponseEntity<Problem> getProblemById(int problemId) {
	        Optional<Problem> problemOptional = problemRepository.findById(problemId);

	        if (problemOptional.isPresent()) {
	            Problem problem = problemOptional.get();
	            return new ResponseEntity<>(problem, HttpStatus.ACCEPTED);
	        } else {
	            // Problem not found
	            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	        }
	    }
		
		public Problem getProblem(int problemId) {
	        Optional<Problem> problemOptional = problemRepository.findById(problemId);

	        if (problemOptional.isPresent()) {
	            Problem problem = problemOptional.get();
	            return problem;
	        } 
	        return null;
	    }
		
		//get leaderboard list from attempt table
		public ResponseEntity<List<LeaderboardEntry>> calculateTotalMarksForContestEntity(int contestId) {
	        // Assuming you have access to the AttemptRepository (autowired or injected)
	        List<LeaderboardEntry> leaderboardEntries = attemptRepository.calculateTotalMarksForContest(contestId);

	        if (leaderboardEntries != null && !leaderboardEntries.isEmpty()) {
	            return new ResponseEntity<>(leaderboardEntries, HttpStatus.OK);
	        } else {
	            // Handle case where leaderboardEntries is empty or null
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
		
		
		public ResponseEntity<StatusT> attemptExecuteCode(NewAttempt newAttempt) {
			
			//get problem object
			Problem problem = getProblem(newAttempt.getProblemId());
			
			String sampleTestCases_s = problem.getSampleInput();
			String sampleOutputOfTestcases_s = problem.getSampleOutput();
			
			
			
			//get submitted code
			String code_s = newAttempt.getCode();
			String output_s;
			ProblemAttemptStatus result_p;
			//code execution starts here
			
			try {
				
				output_s = CodeExecutor.executeJavaCodeUsingShell(code_s, sampleTestCases_s );
				result_p = matchResults(output_s, sampleOutputOfTestcases_s);
				
			}catch(Exception e) {
				System.out.println(e.getMessage());
				output_s = e.getMessage();
				result_p = ProblemAttemptStatus.CompileTimeError;
			}
			
			
			//careting attempt object
			Attempt attempt = new Attempt();
			attempt.setCode( code_s );
			attempt.setResult(output_s);
			attempt.setLanguage(CodingLanguage.valueOf(newAttempt.getLanguage()));
			attempt.setObtained_marks(0);
			attempt.setStatus(result_p);
			
			
			String testCaseOutput_s = null;
			ProblemAttemptStatus resultTestacases_p = result_p;
			//checking hidden testcases
			String testCases_s = problem.getTestCase();
			String resultOfTestCases_s = problem.getResulTestCase();
			if( result_p == ProblemAttemptStatus.Solved) {
				try {
					
					testCaseOutput_s = CodeExecutor.executeJavaProgram(testCases_s, 5000);
					resultTestacases_p = matchResults(testCaseOutput_s, resultOfTestCases_s);
					attempt.setObtained_marks( getObtainedMarks( resultTestacases_p , problem.getMarks()) );
					attempt.setStatus(resultTestacases_p);
					
				}catch(Exception e) {
					System.out.println(e.getMessage());
					testCaseOutput_s = e.getMessage();
					resultTestacases_p = ProblemAttemptStatus.CompileTimeError;
				}
			}
			
			
			StatusT status = createAttempt(attempt, newAttempt.getProblemId() , newAttempt.getContestId(), newAttempt.getStudentId());
			
			setStatus(status, resultTestacases_p);
			
			
			return new ResponseEntity<StatusT> (status, HttpStatus.ACCEPTED);
			
		}
		
		public ProblemAttemptStatus matchResults( String output , String resultOfTestCases ) {
//			output = output.trim();
//			resultOfTestCases = resultOfTestCases.trim();
			
			if( output.equals(resultOfTestCases))
				return ProblemAttemptStatus.Solved;
			
			else if(output.startsWith("Compilation error:"))
				return ProblemAttemptStatus.CompileTimeError;
			
			else if(output.startsWith("Time limit exceeded"))
				return ProblemAttemptStatus.TimeExceed;
			
			return ProblemAttemptStatus.Incorrect;
		}
		
		public int getObtainedMarks(ProblemAttemptStatus result , int marks) {
		
			if( result == ProblemAttemptStatus.Solved)
				return marks;
			return 0;
		}
		
		public void setStatus(StatusT statust , ProblemAttemptStatus result) {
			if(result == ProblemAttemptStatus.Solved)
				statust.setMessage("Test-case passed and Accepted");
			else if(result == ProblemAttemptStatus.Incorrect)
				statust.setMessage("Test-cases Failed!! ");
			else if(result == ProblemAttemptStatus.CompileTimeError)
				statust.setMessage("Compile Time error ");
			else if(result == ProblemAttemptStatus.RunTimeError)
				statust.setMessage("Run Time error ");
			else if(result == ProblemAttemptStatus.TimeExceed)
				statust.setMessage("Time Exceeded");
		}
		
		
	

}
