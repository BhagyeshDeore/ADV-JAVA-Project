package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Teacher;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
	
	public Optional<Teacher> findByEmailAndPassword(String email , String Password);

}
