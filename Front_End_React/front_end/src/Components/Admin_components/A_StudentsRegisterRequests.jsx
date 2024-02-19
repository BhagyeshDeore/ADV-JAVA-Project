import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {
  getStudentList,
  updateStudentStatus,
} from "../../Services/Admin_services/Admin_APIs2";
import { ANavigationBar } from "./ANavigationBar";

export function A_StudentsRegisterRequests(props) {
  const [studentData, setStudentData] = useState([]);

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
      const result = await updateStudentStatus(studentId, status);
      console.log("Update status response => ", result);
  
      // Assuming the API call is successful, update the studentData state
      getFromAdminApi();
    } catch (error) {
      console.log("APIException ", error.data);
    }
  };

  const toggleStatus = async (studentId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Deactive" : "Active";

    // Update student status through API call
    await updateStudentStatusFromApi(studentId, newStatus);

    // Update the studentData state locally based on the new status
    setStudentData((prevData) =>
      prevData.map((student) =>
        student.studentId === studentId
          ? { ...student, status: newStatus }
          : student
      )
    );
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
              {/* <th>Password</th> */}
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
                  {/* <td>{student.password}</td> */}
                  <td>{student.createdAt}</td>
                  <td>
                    <Button
                      variant={
                        student.status === "Active" ? "success" : "danger"
                      }
                      size="sm"
                      disabled
                    >
                      {student.status === "Active" ? "Active" : "Deactivate"}
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant={
                        student.status === "Active" ? "danger" : "success"
                      }
                      size="sm"
                      onClick={() =>
                        toggleStatus(student.studentId, student.status)
                      }
                    >
                      {student.status === "Active"
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
