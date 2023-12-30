package com.project.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="attempt")
public class Attempt {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int attemptId;
	
	@Column(columnDefinition="LONGTEXT")
	private String code;
	
	public static enum CodingLanguage{
		Java
	}
	
	@Enumerated(EnumType.STRING)
	private CodingLanguage language = CodingLanguage.Java;

	public static enum ProblemAttemptStatus{
		Solved, Incorrect, PartiallySolved, CompileTimeError, RunTimeError, TimeExceed
	}
	@Enumerated(EnumType.STRING)
	private ProblemAttemptStatus status;
	
	@Column(columnDefinition="TEXT")
	private String result;
	
	private int obtained_marks;
	
	@ManyToOne
	@JoinColumn(name="studentId")
	private Student student;
	
	@ManyToOne
	@JoinColumn(name="contestId")
	private Contest contest;
	
	
	@ManyToOne
	@JoinColumn(name="problemId")
	private Problem problem;


	
	
	//getters and setters
	public int getAttemptId() {
		return attemptId;
	}


	public void setAttemptId(int attemptId) {
		this.attemptId = attemptId;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public CodingLanguage getLanguage() {
		return language;
	}


	public void setLanguage(CodingLanguage language) {
		this.language = language;
	}


	public ProblemAttemptStatus getStatus() {
		return status;
	}


	public void setStatus(ProblemAttemptStatus status) {
		this.status = status;
	}


	public String getResult() {
		return result;
	}


	public void setResult(String result) {
		this.result = result;
	}


	public int getObtained_marks() {
		return obtained_marks;
	}


	public void setObtained_marks(int obtained_marks) {
		this.obtained_marks = obtained_marks;
	}


	public Student getStudent() {
		return student;
	}


	public void setStudent(Student student) {
		this.student = student;
	}


	public Contest getContest() {
		return contest;
	}


	public void setContest(Contest contest) {
		this.contest = contest;
	}


	public Problem getProblem() {
		return problem;
	}


	public void setProblem(Problem problem) {
		this.problem = problem;
	}
	
	
	
	
	
	
	
	
	


}
