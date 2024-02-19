import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {
  getTecherList,
  updateTeacherStatus,
} from "../../Services/Admin_services/Admin_APIs";
import { getAdminID } from "../../Utiles/Admin_utiles/Admin_Token_util";
import { ANavigationBar } from "./ANavigationBar";

export function A_DashBoard(props) {
  const [teacherData, setTeacherData] = useState([]);

  // Get Teachers List
  const getFromAdminApi = async () => {
    try {
      const result = await getTecherList(getAdminID());
      setTeacherData(result.data);
    } catch (error) {
      console.log("API Exception ", error.data);
    }
  };

  useEffect(() => {
    getFromAdminApi();
  }, []);

  // API Call for Update teacher Status
  const updateTeacherStatusFromApi = async (teacherId, newStatus) => {
    try {
      const result = await updateTeacherStatus({
        teacherId: teacherId,
        status: newStatus,
      });
      console.log("Update status response => ", result.data);

      // Assuming the API call is successful, update the teacherData state
      getFromAdminApi();
    } catch (error) {
      console.log("API Exception ", error.data);
    }
  };

  const toggleStatus = async (teacherId, currentStatus) => {
    const newStatus = currentStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE";

    // Update teacher status through API call
    await updateTeacherStatusFromApi(teacherId, newStatus);
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
              <th>Phone</th>
              {/* <th>Password</th> */}
              <th>Created At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teacherData.map((teacher) => (
              <tr key={teacher.teacherId}>
                <td>{teacher.teacherId}</td>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>
                <td>{teacher.phoneNumber}</td>
                {/* <td>{teacher.password}</td> */}
                <td>{teacher.createdAt}</td>
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
                    onClick={() =>
                      toggleStatus(teacher.teacherId, teacher.status)
                    }
                  >
                    {teacher.status === "ACTIVE" ? "Deactivate" : "Activate"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
