package com.project.dto;

public class StudentDto {
	int studentId;
	private String status;

	public int getstudentId() {
		return studentId;
	}

	public void setstudentId(int studentId) {
		this.studentId = studentId;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getStatus() {
		return status;
	}
	
}
