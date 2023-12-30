package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Attempt;

public interface AttemptRepository extends JpaRepository<Attempt, Integer> {

}
