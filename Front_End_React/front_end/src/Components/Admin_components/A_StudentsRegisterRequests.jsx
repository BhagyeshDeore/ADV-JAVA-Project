import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {
  getStudentList,
  updateStudentStatus,
} from "../../Services/Admin_services/Admin_APIs2";
//import { getAdminID } from "../../Utiles/Admin_utiles/Admin_Token_util";
import { ANavigationBar } from "./ANavigationBar";
// ... (imports and other code)

export function A_StudentsRegisterRequests(props) {
  const [studentData, setStudentData] = useState([]);
  // const [updateStudent, setUpateStudent] = useState({
  //   studentId: "",
  //   status: "",
  // });

  const getFromAdminApi = async () => {
    try {
      const result = await getStudentList(1);
      setStudentData(result.data);
    } catch (error) {
      console.log("APIException ", error.data);
    }
  };

  useEffect(() => {
    getFromAdminApi();
  }, []);

  const updateStudentStatusFromApi = async (studentId, status) => {
    try {
      const result = await updateStudentStatus( 
      {  studentId: studentId,
        status: status,});
       
    // console.log("Update status response => " + result.data);
    } catch (error) {
      console.log("APIException ", error.data);
    }
  };

  const toggleStatus =   (studentId, status) => {
    setStudentData((prevData) =>
      prevData.map((student) =>
        student.studentId === studentId
          ? {
              ...student,
              status: student.status === "ACTIVE" ? "DEACTIVE" : "ACTIVE",
            }
          : student
      )
      
    );

    updateStudentStatusFromApi(studentId, status);
  };

  return (
    <>
      <ANavigationBar />
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Admin Dashboard
        </h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Pnr</th>
              <th>Phone</th>
              <th>Password</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(studentData) && studentData.length > 0 ? (
              studentData.map((student) => (
                <tr key={student.studentId}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.pnr}</td>
                  <td>{student.mobileNumber}</td>
                  <td>{student.password}</td>
                  <td>{student.createdAt}</td>
                  <td>
                    <Button
                      variant={
                        student.status === "ACTIVE" ? "success" : "danger"
                      }
                      size="sm"
                      disabled
                    >
                      {student.status === "ACTIVE" ? "Active" : "Deactivate"}
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant={
                        student.status === "ACTIVE" ? "danger" : "success"
                      }
                      size="sm"
                      onClick={() =>
                        toggleStatus(student.studentId, student.status)
                      }
                    >
                      {student.status === "ACTIVE"
                        ? "Deactivate"
                        : "Activate"}
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No student data available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default A_StudentsRegisterRequests;
