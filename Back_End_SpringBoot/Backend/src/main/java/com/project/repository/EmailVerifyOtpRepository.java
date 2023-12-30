package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.EmailVerifyOtp;

public interface EmailVerifyOtpRepository extends JpaRepository<EmailVerifyOtp, Integer> {

}
