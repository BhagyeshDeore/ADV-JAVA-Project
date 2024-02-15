package com.project.dto;

import com.project.entity.Student.StudentStatus;
import com.project.entity.Teacher.teacherStatus;

public class TeacherLoginStatus {
	
	private boolean status;
	private String message;
	private int teacherId;
	private teacherStatus teachStatus; // Add this field
	
	public teacherStatus getTeachStatus() {
		return teachStatus;
	}
	public void setTeachStatus(teacherStatus teachStatus) {
		this.teachStatus = teachStatus;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}
	
	

}
