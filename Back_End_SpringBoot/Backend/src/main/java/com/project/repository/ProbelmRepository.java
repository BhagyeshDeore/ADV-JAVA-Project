package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Problem;

public interface ProbelmRepository extends JpaRepository< Problem, Integer> {

}
