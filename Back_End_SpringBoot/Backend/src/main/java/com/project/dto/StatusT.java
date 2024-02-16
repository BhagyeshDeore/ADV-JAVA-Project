package com.project.dto;

public class StatusT {
	
	private boolean status;
	private String message;
	
	
	
	public StatusT(String message ,boolean status) {
		super();
		this.status = status;
		this.message = message;
	}
	public StatusT() {
		// TODO Auto-generated constructor stub
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
}
