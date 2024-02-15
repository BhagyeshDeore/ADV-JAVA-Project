package com.project.dto;

import com.project.entity.Student.StudentStatus;

public class StudentDto {
    private int studentId;
    private StudentStatus status;

    public int getstudentId() {
        return studentId;
    }

    public void setstudentId(int studentId) {
        this.studentId = studentId;
    }

    public StudentStatus getStatus() {
        return status;
    }

    public void setStatus(StudentStatus status) {
        this.status = status;
    }
}
