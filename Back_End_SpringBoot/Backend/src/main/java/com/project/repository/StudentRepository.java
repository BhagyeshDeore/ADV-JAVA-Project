package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.project.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
	
	public Optional<Student> findByEmailAndPassword(String email, String password);
	
	@Query("select count(s) from Student s where s.email = ?1")
	public Long findIfStudentExists(String email);
	
	public Optional<Student> findByPnr(String pnr);
}
