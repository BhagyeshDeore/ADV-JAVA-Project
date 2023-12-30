package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Contest;
import com.project.entity.Teacher;

public interface ContestRepository extends JpaRepository<Contest, Integer> {

	public List<Contest> findAllByTeacher(Teacher teacher);

	

	
}
