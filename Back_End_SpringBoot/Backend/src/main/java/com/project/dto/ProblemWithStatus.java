package com.project.dto;

import java.util.List;

import com.project.entity.Attempt;
import com.project.entity.Attempt.ProblemAttemptStatus;
import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Problem.DifficultyLevel;


public class ProblemWithStatus {

	private int problemId;
	
	private String title;
	
	private String problemStatement;
	
	private String explanation;
	
	private DifficultyLevel difficultyLevel;
	
	private int marks;
	
	private String sampleInput;
	
	private String sampleOutput;
	
	private String testCase;
	
	private String resulTestCase;
	
	private String solutionCode;
	
	private Contest contest;
	
	private int attempt_id = -1;
	
	private ProblemAttemptStatus status = null;
	

	public ProblemWithStatus(Problem p) {
		
		this.problemId = p.getProblemId();
		this.title = p.getTitle();
		this.problemStatement = p.getProblemStatement();
		this.explanation = p.getExplanation();
		this.difficultyLevel = p.getDifficultyLevel();
		this.marks = p.getMarks();
		this.sampleInput = p.getSampleInput();
		this.sampleOutput = p.getSampleOutput();
		this.testCase = p.getTestCase();
		this.resulTestCase = p.getResulTestCase();
		this.solutionCode = p.getSolutionCode();
		this.contest = p.getContest();
	}


	public int getProblemId() {
		return problemId;
	}


	public void setProblemId(int problemId) {
		this.problemId = problemId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getProblemStatement() {
		return problemStatement;
	}


	public void setProblemStatement(String problemStatement) {
		this.problemStatement = problemStatement;
	}


	public String getExplanation() {
		return explanation;
	}


	public void setExplanation(String explanation) {
		this.explanation = explanation;
	}


	public DifficultyLevel getDifficultyLevel() {
		return difficultyLevel;
	}


	public void setDifficultyLevel(DifficultyLevel difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}


	public int getMarks() {
		return marks;
	}


	public void setMarks(int marks) {
		this.marks = marks;
	}


	public String getSampleInput() {
		return sampleInput;
	}


	public void setSampleInput(String sampleInput) {
		this.sampleInput = sampleInput;
	}


	public String getSampleOutput() {
		return sampleOutput;
	}


	public void setSampleOutput(String sampleOutput) {
		this.sampleOutput = sampleOutput;
	}


	public String getTestCase() {
		return testCase;
	}


	public void setTestCase(String testCase) {
		this.testCase = testCase;
	}


	public String getResulTestCase() {
		return resulTestCase;
	}


	public void setResulTestCase(String resulTestCase) {
		this.resulTestCase = resulTestCase;
	}


	public String getSolutionCode() {
		return solutionCode;
	}


	public void setSolutionCode(String solutionCode) {
		this.solutionCode = solutionCode;
	}


	public Contest getContest() {
		return contest;
	}


	public void setContest(Contest contest) {
		this.contest = contest;
	}


	public int getAttempt_id() {
		return attempt_id;
	}


	public void setAttempt_id(int attempt_id) {
		this.attempt_id = attempt_id;
	}


	public ProblemAttemptStatus getStatus() {
		return status;
	}


	public void setStatus(ProblemAttemptStatus status) {
		this.status = status;
	}

	
	


}
