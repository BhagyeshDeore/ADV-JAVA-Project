package com.project.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Teacher;

public interface ProblemRepository extends JpaRepository< Problem, Integer> {
	

	List<Problem> findByContest(Contest contest);

	List<Problem> findAllByContest(Contest contest);

	@Query("SELECT p FROM Problem p WHERE p.contest.id = :contestId AND p.id = :problemId")
	Optional<Problem> findByContestIdAndProblemId(@Param("contestId") int contestId, @Param("problemId") int problemId);
}
