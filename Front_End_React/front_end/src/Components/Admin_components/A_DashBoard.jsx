import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

export function A_DashBoard(props) {
  //   your actual data
  const initialTeacherData = [
    {
      teacher_id: 1,
      name: "Aaditya Kanasana",
      email: "aditya123@gmail.com",
      phone_number: "741852963",
      password: "aaditya123",
      created_at: "2022-12-31 15:30:45",
      status: "ACTIVE",
    },
    {
        teacher_id: 2,
        name: "Aaditya Kanasana",
        email: "aditya123@gmail.com",
        phone_number: "741852963",
        password: "aaditya123",
        created_at: "2022-12-31 15:30:45",
        status: "ACTIVE",
      },
      {
        teacher_id: 3,
        name: "Aaditya Kanasana",
        email: "aditya123@gmail.com",
        phone_number: "741852963",
        password: "aaditya123",
        created_at: "2022-12-31 15:30:45",
        status: "ACTIVE",
      },
      {
        teacher_id: 4,
        name: "Aaditya Kanasana",
        email: "aditya123@gmail.com",
        phone_number: "741852963",
        password: "aaditya123",
        created_at: "2022-12-31 15:30:45",
        status: "ACTIVE",
      },
      {
        teacher_id: 5,
        name: "Aaditya Kanasana",
        email: "aditya123@gmail.com",
        phone_number: "741852963",
        password: "aaditya123",
        created_at: "2022-12-31 15:30:45",
        status: "ACTIVE",
      },
      {
        teacher_id: 6,
        name: "Aaditya Kanasana",
        email: "aditya123@gmail.com",
        phone_number: "741852963",
        password: "aaditya123",
        created_at: "2022-12-31 15:30:45",
        status: "ACTIVE",
      },
    
  ];

  const [teacherData, setTeacherData] = useState(initialTeacherData);

  const toggleStatus = (teacherId) => {
    setTeacherData((prevData) =>
      prevData.map((teacher) =>
        teacher.teacher_id === teacherId
          ? { ...teacher, status: teacher.status === "ACTIVE" ? "DEACTIVE" : "ACTIVE" }
          : teacher
      )
    );
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Admin Dashboard</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Created At</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {teacherData.map((teacher) => (
            <tr key={teacher.teacher_id}>
              <td>{teacher.teacher_id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.phone_number}</td>
              <td>{teacher.password}</td>
              <td>{teacher.created_at}</td>
              <td>
                <Button
                  variant={teacher.status === "ACTIVE" ? "success" : "danger"}
                  size="sm"
                  disabled
                >
                  {teacher.status === "ACTIVE" ? "Active" : "Deactivate"}
                </Button>
              </td>
              <td>
                <Button
                  variant={teacher.status === "ACTIVE" ? "danger" : "success"}
                  size="sm"
                  onClick={() => toggleStatus(teacher.teacher_id)}
                >
                  {teacher.status === "ACTIVE" ? "Deactivate" : "Activate"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

 
