package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {

}
