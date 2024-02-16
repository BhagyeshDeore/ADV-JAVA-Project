package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.dto.LeaderboardEntry;
import com.project.entity.Attempt;
import com.project.entity.Contest;
import com.project.entity.Problem;
import com.project.entity.Student;

public interface AttemptRepository extends JpaRepository<Attempt, Integer> {

	 public List<Attempt> findAllByContest( Contest contest);   
	 public List<Attempt> findByStudent( Student student );
	 public List<Attempt>  findByStudentAndContest( Student student, Contest contest);
	 
	 
	 @Query("SELECT NEW com.project.dto.LeaderboardEntry(CAST(s.id AS java.lang.Long), s.name, CAST(SUM(a.obtained_marks) AS java.lang.Long)) " +
		       "FROM Attempt a " +
		       "JOIN a.student s " +
		       "WHERE a.contest.id = :contestId " +
		       "GROUP BY s.id")
		List<LeaderboardEntry> calculateTotalMarksForContest(@Param("contestId") int contestId);


}
