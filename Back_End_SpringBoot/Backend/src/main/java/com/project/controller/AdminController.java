package com.project.controller;
import java.util.List;
//import java.util.Optional;
//import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

import com.project.dto.AdminLoginStatus;
import com.project.dto.StatusSU;
import com.project.dto.StudentDto;
//import com.project.dto.TeacherLoginStatus;
import com.project.entity.Admin;

//import com.project.dto.StatusT;
 
import com.project.entity.Student;
//import com.project.entity.Teacher;
//import com.project.entity.Student.StudentStatus;
import com.project.repository.StudentRepository;
import com.project.services.AdminServices;
//import com.project.services.TeacherServices;

//import com.project.dto.StatusA;
 

public class AdminController {
	@Autowired
	private AdminServices adminServices;
	private StudentRepository studentRepository;	
	
	
	//Admin login
	
//	 @PostMapping("/admin/login")
//	    public String loginAdmin(@RequestBody Map<String,Object> loginRequest) {
//	    	int adminId = (int) loginRequest.get(123456);
//	        String Password = (String)loginRequest.get("Admin@123");
//
//	        if (adminServices.authenticateAdmin(adminId, Password)) {
//	            return "Login successful!";
//	        } else {
//	            return "Invalid username or password.";
//	        }
//	    }
	 
	
	@PostMapping("/admin/login")
	public ResponseEntity<AdminLoginStatus> adminLogin(@RequestBody Admin admin) {
	    ResponseEntity<AdminLoginStatus> response = adminServices.adminLogin(admin);
	    return response;
	}
	
//student list
	@GetMapping("/admin/getStudentList")
	public List<Student> getStudentList(@RequestParam int adimnId) {

		return adminServices.getStudentList(adimnId);
		
	}
	
	@GetMapping("/admin/updateStudentStatus")
	public ResponseEntity<StatusSU> updateStudentStatus(@RequestParam StudentDto studentDto)
	{
		int studentId =studentDto.getstudentId();
		String status = studentDto.getStatus();
		StatusSU statuSU = adminServices.updateStudentStatus(studentDto) ;
		return new ResponseEntity<StatusSU>(statuSU,HttpStatus.CREATED);
		
	}
	
 
	
	
	
	 

}


















 

 
 

 
