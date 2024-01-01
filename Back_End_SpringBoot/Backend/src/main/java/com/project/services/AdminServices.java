package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.project.dto.TeacherDto;
import com.project.dto.StatusA;
import com.project.dto.StatusTU;
import com.project.entity.Teacher.teacherStatus;
import com.project.repository.StudentRepository;
import com.project.repository.TeacherRepository;
import com.project.dto.StatusSU;
import com.project.dto.StudentDto;
import com.project.dto.AdminLoginStatus;
import com.project.entity.*;
import com.project.entity.Student.StudentStatus;
import com.project.repository.AdminRepository;

@Service
public class AdminServices {
	@Autowired
	private TeacherRepository teacherRepository;
	@Autowired
	private AdminRepository adminRepository;
	
	

	
	
	
		
	//Get All teacher List at Admin side	
		
	public List<Teacher> getTeacherList( ) {
		
		System.out.println("List of all teachers :");
		return teacherRepository.findAll();
		
		}



//Register New Teacher
	public StatusA registerTeacher(Teacher teacher) {
		teacherRepository.save(teacher);
		StatusA status =new StatusA();
		status.setMessage("New Teacher Registered Successfully");
		status.setStatus(true);
		return status;
	}

	
		
//Update Teacher Status
	
	 public StatusTU updateTeacherStatus(TeacherDto teacherDto) {
	        Optional<Teacher> foundteacher = teacherRepository.findById( teacherDto.getTeacherId() );
	        StatusTU statusTU =new StatusTU ()  ; 
	        Teacher teacher  = foundteacher.get();
	        teacher.setStatus( teacherStatus.valueOf( teacherDto.getStatus() ));
	        statusTU.setMessage("Teacher Status Updated Successfully!");
	        teacherRepository.save(teacher);
	        statusTU.setStatus(true);
	        return statusTU;
	       
	    }
	 
	 
	 //Vaishnavi 
	 
	 public ResponseEntity<AdminLoginStatus> adminLogin(Admin admin) {
			
			Optional<Admin> foundAdmin =  adminRepository.findByEmailAndPassword(admin.getEmail(), admin.getPassword());
			AdminLoginStatus status = new AdminLoginStatus();
			

			if(foundAdmin.isPresent()) {
				//found
				 
				status.setMessage("Successfully Logged In!");
				status.setAdminId(foundAdmin.get().getAdminId());
				  
			}else{
				
				//not found
				status.setMessage("Wrong Email Or Password!");
				
			}
			return null;
			
		}
	 
	//studentlist
		@Autowired
		private StudentRepository studentRepository;;

		//
		public List<Student> getStudentList(int adminId)
		{
			System.out.println("LIST OF STUDENT");
			return studentRepository.findAll();
			}
	 
		//update s status
				public StatusSU updateStudentStatus(StudentDto studentDto)
				{
					Optional<Student> foundstudent = studentRepository.findById( studentDto.getstudentId() );
					StatusSU statusSU = new StatusSU();
					Student student =foundstudent.get();
					student.setStatus(StudentStatus.valueOf(studentDto.getStatus() ));
					statusSU.setMessage("Student status updated!!");
					studentRepository.save(student);
					statusSU.setStatus(true);
					return statusSU;
					}
	 
	
				
				//Register new teacher
//				
//				public int teacherRegister(Teacher teacher) {
//					
//						teacher.setStatus(teacherStatus.valueOf(ACTIVE));
//						String email = student.getEmail();
//						student.setStatus(StudentStatus.newAccount);
//						studentRepository.save(student);
//						return student.getStudentId();
//					
//				}

}
