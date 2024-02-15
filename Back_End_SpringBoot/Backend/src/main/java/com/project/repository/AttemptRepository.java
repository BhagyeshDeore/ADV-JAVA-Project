package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Attempt;
import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Student;

public interface AttemptRepository extends JpaRepository<Attempt, Integer> {

	 public List<Attempt> findAllByContest( Contest contest);   
	 public List<Attempt> findByStudent( Student student );
	 public List<Attempt>  findByStudentAndContest( Student student, Contest contest);

}
