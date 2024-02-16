package com.project.dto;

public class LeaderboardEntry {
    
	 private Long studentId;
	 private String studentName;
	 private Long totalMarks;
	    
	 public LeaderboardEntry(Long studentId, String studentName, Long totalMarks) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.totalMarks = totalMarks;
	 }

	 // Default constructor
	 public LeaderboardEntry() {
        // Empty constructor
	 }

    // Getters and setters
    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Long getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(Long totalMarks) {
        this.totalMarks = totalMarks;
    }
}