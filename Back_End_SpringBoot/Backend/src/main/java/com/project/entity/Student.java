package com.project.entity;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="student")
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentId;
	
	private String pnr;
	private String name;
	private String email;
	
	private boolean emailverificationStatus = false;
	private String mobileNumber;
	
	public static enum Department{
		CDAC, DBDA
	}
	@Enumerated(EnumType.STRING)
	private Department department;
	
	private String password;
	public static enum StudentStatus{
		emailUnverified, newAccount, Active, Deactive
	}
	@Enumerated(EnumType.STRING)
	private StudentStatus status = StudentStatus.emailUnverified;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student")
	private List<EmailVerifyOtp> otpRequests;
	
	@JsonIgnore
	@OneToMany(mappedBy = "student")
	private List<Attempt> attempts;

	
	
	
	
	//getters and setters
	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getPnr() {
		return pnr;
	}

	public void setPnr(String pnr) {
		this.pnr = pnr;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isEmailverificationStatus() {
		return emailverificationStatus;
	}

	public void setEmailverificationStatus(boolean emailverificationStatus) {
		this.emailverificationStatus = emailverificationStatus;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public StudentStatus getStatus() {
		return status;
	}

	public void setStatus(StudentStatus status) {
		this.status = status;
	}

	public List<EmailVerifyOtp> getOtpRequests() {
		return otpRequests;
	}

	public void setOtpRequests(List<EmailVerifyOtp> otpRequests) {
		this.otpRequests = otpRequests;
	}

	public List<Attempt> getAttempts() {
		return attempts;
	}

	public void setAttempts(List<Attempt> attempts) {
		this.attempts = attempts;
	}
	
	
	
	
	
	

}
