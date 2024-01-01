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
  const [updateTeacher, setUpateTeacher] = useState({
    teacherId: "",
    status: "",
  });

  //Get Teachers List
  const getFromAdminApi = async () => {
    console.log("AdminId   :", getAdminID());
    try {
      ///TODO : Dynamic admin ID pass
      const result = await getTecherList(getAdminID());
      //console.log(result.data);
      setTeacherData(result.data);
    } catch (error) {
      console.log("APIException ", error.data);
    }
  };
  useEffect(() => {
    getFromAdminApi();
  }, []);

  //API Call for Upate teacher Status
  const updateTeacherStatusFromApi = async () => {
    try {
      console.log("befre sending the api", updateTeacher);
      const result = await updateTeacherStatus(updateTeacher);
      console.log("Update status response => " + result.data);
    } catch (error) {
      console.log("APIException ", error.data);
    }
  };

  const toggleStatus = async (teacherId, status) => {
    var newstatus;
    if (status == "ACTIVE") newstatus = "INACTIVE";
    else newstatus = "ACTIVE";

    //await updateTeacherData(teacherId, newstatus);
    await setUpateTeacher({
      teacherId: teacherId,
      status: status,
    });
    //updateData;
    setTimeout(updateTeacherStatusFromApi, 1000);
    //updateTeacherStatusFromApi();
    getFromAdminApi();
    setTeacherData((prevData) =>
      prevData.map((teacher) =>
        teacher.teacherId === teacherId
          ? {
              ...teacher,
              status: teacher.status === "ACTIVE" ? "DEACTIVE" : "ACTIVE",
            }
          : teacher
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
              <th>Phone</th>
              <th>Password</th>
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
                <td>{teacher.password}</td>
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
