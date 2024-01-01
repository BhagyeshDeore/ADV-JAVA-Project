package com.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
	
	
	//public Optional<Admin> findByEmailAndPassword(String email , String Password);
		public Optional<Admin> findByEmailAndPassword(String email , String Password);

		 
	

}
