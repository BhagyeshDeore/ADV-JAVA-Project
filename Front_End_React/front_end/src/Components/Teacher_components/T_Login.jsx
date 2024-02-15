import { THeader } from "./THeader";
import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios  from "axios";
import { loginTeacher } from "../../Services/Teacher_services/Teacher_APIs";
import { useNavigate } from "react-router-dom";
import { HNavbar } from "../HNavbar";

export function T_Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  //   const [updatePasswordMode, setUpdatePasswordMode] = useState(false);
  //   const [newPassword, setNewPassword] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    //updates the formData state with the new values and clears any validation errors for the corresponding field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    console.log( formData );
  };

  //   const handleUpdatePasswordClick = (e) => {
  //     e.preventDefault();
  //     setUpdatePasswordMode(true);
  //   };

  //   const handleUpdatePassword = (e) => {
  //     e.preventDefault();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate for fields
    const validationError = {};
    //check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        validationError[key] = "This Fiels is required";
      }
    });

    //display validation errors infields
    setErrors(validationError);

    //if no error stimulate a successful login
    if (Object.keys(validationError).length === 0) {
      //Action after successful login
      //alert("You have successfully loged in!");
      postOnAPI();
    }
  };

  const postOnAPI = async ()=>{
   try{
        const result = await loginTeacher(formData);
        console.log("from login api ",result.data , result.data.teacherId);
        localStorage.setItem('teacherId' , result.data.teacherId);
        navigate("/teacher-dashboard");
   }catch(error){
      alert("wrong email or password");
      console.log("from Login api",error.data)
   }
}

  return (
    //jsx code for UI render
    <div>
    <HNavbar />
    <Container style={{ textAlign: "center", marginTop: "40px" }}>
      <div
        className="container"
        style={{
          backgroundColor: "grey",
          width: "450px",
          borderRadius: "15px",
          border: "2px solid black",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          padding: "15px",
        }}
      >
        <h2
          className="heading"
          style={{
            textAlign: "center",
            backgroundColor: "darkgrey",
            margin: "-15px  -15px",
            paddingBottom: "10px",
            marginLeft: "-15px",
            marginRight: "-15px",
            borderRadius: "15px 15px 0 0",
          }}
        >
          TEACHER LOGIN
        </h2>
        <br />
        <form
          style={{ paddingTop: "10px", paddingBottom: "5px" }}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            {/* UserName*/}
            <Col md={12}>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email..."
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.teacherId}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            {/*Password */}
            <Col md={12}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.teacherPassword}
              </Form.Control.Feedback>
            </Col>
          </Row>
          {/* Login Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="outline-dark" type="submit">
              Login
            </Button>
            {/* Update Password line on browser*/}
            <p
              className="tagging"
              style={{ fontSize: "13px", marginTop: "10px" }}
            >
              Update your Password{" "}
              <a
                href="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Update Password
              </a>
            </p>
          </div>
        </form>
      </div>
    </Container>
    </div>
  );
}
