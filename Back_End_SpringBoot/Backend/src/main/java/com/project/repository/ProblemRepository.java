package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Problem;

public interface ProblemRepository extends JpaRepository< Problem, Integer> {
	
	    
}
