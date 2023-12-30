package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Contest;

public interface ContestRepository extends JpaRepository<Contest, Integer> {

}
