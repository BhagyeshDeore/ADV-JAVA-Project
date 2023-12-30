package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	public Optional<Student> findByEmailAndPassword(String email, String password);
}
