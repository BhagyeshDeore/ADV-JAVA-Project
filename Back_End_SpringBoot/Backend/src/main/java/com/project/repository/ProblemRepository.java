package com.project.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Teacher;

public interface ProblemRepository extends JpaRepository< Problem, Integer> {
	

	List<Problem> findByContest(Contest contest);

	List<Problem> findAllByContest(Contest contest);

}
