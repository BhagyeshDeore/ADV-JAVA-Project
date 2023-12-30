package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.repository.AdminRepository;

@Service
public class AdminServices {
	
	@Autowired
	private AdminRepository adminRepository;

}
