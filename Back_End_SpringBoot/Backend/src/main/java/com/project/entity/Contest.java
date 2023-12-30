package com.project.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

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
@Table(name="contest")
public class Contest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int contestId;

	private String title;
	
	@Column(columnDefinition="TEXT")
	private String description;
	
	public static enum ContestTopic{
		DSA, OOPs, String, ExceptionHandling
	}
	
	@Enumerated(EnumType.STRING)
	private ContestTopic topic;
	private LocalDateTime satrtTime;
	private LocalDateTime endTime;
	
	@CreationTimestamp
	private LocalDateTime createdAt;
	
	@ManyToOne
	@JoinColumn(name="teacherId")
	private Teacher teacher;
	
	@OneToMany(mappedBy = "contest")
	private List<Problem> problems;
	
	@OneToMany(mappedBy = "contest")
	private List<Attempt> attempts;

	
	
	
	//getters and setters
	public int getContestId() {
		return contestId;
	}

	public void setContestId(int contestId) {
		this.contestId = contestId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public ContestTopic getTopic() {
		return topic;
	}

	public void setTopic(ContestTopic topic) {
		this.topic = topic;
	}

	public LocalDateTime getSatrtTime() {
		return satrtTime;
	}

	public void setSatrtTime(LocalDateTime satrtTime) {
		this.satrtTime = satrtTime;
	}

	public LocalDateTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalDateTime endTime) {
		this.endTime = endTime;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public Teacher getTeacher() {
		return teacher;
	}

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}

	public List<Problem> getProblems() {
		return problems;
	}

	public void setProblems(List<Problem> problems) {
		this.problems = problems;
	}

	public List<Attempt> getAttempts() {
		return attempts;
	}

	public void setAttempts(List<Attempt> attempts) {
		this.attempts = attempts;
	}
	
	
	
	
	
}
