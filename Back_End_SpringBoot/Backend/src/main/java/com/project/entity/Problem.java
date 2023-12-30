package com.project.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="problem")
public class Problem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int problemId;
	
	private String title;
	
	@Column(columnDefinition="TEXT")
	private String problemStatement;
	
	@Column(columnDefinition="TEXT")
	private String explanation;
	
	
	public static enum DifficultyLevel{   
		EASY , MEDIUM, HARD
	}
	@Enumerated(EnumType.STRING)
	private DifficultyLevel difficultyLevel;
	
	
	private int marks;
	
	@Column(columnDefinition="TEXT")
	private String sampleInput;
	
	@Column(columnDefinition="TEXT")
	private String sampleOutput;
	
	@Column(columnDefinition="TEXT")
	private String testCase;
	
	@Column(columnDefinition="TEXT")
	private String resulTestCase;
	
	@Column(columnDefinition="LONGTEXT")
	private String solutionCode;
	
	//@JsonIgnore
	@ManyToOne
	@JoinColumn(name="contest_id")
	private Contest contest;
	
	@OneToMany(mappedBy = "problem")
	private List< Attempt> attempts;

	
	
	
	
	
	//getters and setters
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

	public List<Attempt> getAttempts() {
		return attempts;
	}

	public void setAttempts(List<Attempt> attempts) {
		this.attempts = attempts;
	}
	
	
	
	

}
