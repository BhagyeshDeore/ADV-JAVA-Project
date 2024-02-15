import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { registerStudent } from "../../Services/Student_services/Student_APIs";
import { Navigate, useNavigate } from "react-router-dom";
import { HNavbar } from "../HNavbar";

export function S_Register(props) {
  const [formData, setFormData] = useState({
    pnr: "",
    email: "",
    name: "",
    mobileNumber: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear validation error when the user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = {};

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        validationErrors[key] = "This field is required";
      }
    });

    // Validate email format
    if (!formData.email.includes("@")) {
      validationErrors.email = "Invalid email format";
    }

    // Validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobileNumber)) {
      validationErrors.mobileNumber =
        "Mobile number must be 10 digits";
    }

    // Validate password and confirm password
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // Display validation errors inline
    setErrors(validationErrors);

    // If no errors and form not submitted yet, proceed with submission
        if (Object.keys(validationErrors).length === 0 && !formSubmitted) {
            try {
                // Call the registerStudent API
                const response = await registerStudent(formData);
            
                // Check if registration was successful based on the response
                if (response.data && response.data.status) {
                  // Handle successful registration
                  console.log("Registration successful:", response.data);
                  navigate("/student-login");
                } else {
                  // Handle registration failure
                  console.error("Registration failed:", response.data.message);
                  alert("Registration failed. Please try again.");
                }
              } catch (error) {
                // Handle registration failure (axios error)
                    console.error("Registration failed:", error);

                    // Check if the error has a response property
                    if (error.response) {
                        // Check if the server provided additional details in the response
                        if (error.response.data && error.response.data.message) {
                        alert(`Registration failed: ${error.response.data.message}`);
                        } else {
                        alert("Student Already Registered!!");
                        }
                    } else {
                        // Handle other types of errors (e.g., network issues)
                        alert("Student Already Registered!!");
                    }
            
              // Optionally, you can redirect to another page after successful submission
            
              
            }
        }
    }
  

  return (
    <div>
    <HNavbar />
    <Container style={{ textAlign: "center" }}>
      <div
        className="container"
        style={{
          backgroundColor: "grey",
          width: "650px",
          marginTop: "40px",
          borderRadius: "15px",
          border: "2px solid black",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
        }}
      >
        <h2
          className="heading"
          style={{
            textAlign: "center",
            backgroundColor: "darkgrey",
            margin: "0",
            paddingBottom: "10px",
            marginLeft: "-11.5px",
            marginRight: "-11.5px",
            borderRadius: "15px 15px 0 0",
            paddingTop: "inherit",
          }}
        >
          Student Sign Up
        </h2>
        <Form
          style={{ paddingTop: "10px", paddingBottom: "5px" }}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            {/* Student Id */}
            <Col md={6}>
              <Form.Label>Student PRN Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student PRN NO"
                name="pnr"
                value={formData.pnr}
                onChange={handleChange}
                isInvalid={!!errors.pnr}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.pnr}
              </Form.Control.Feedback>
            </Col>

            {/* Email */}
            <Col md={6}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.email}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Name */}
            <Col md={6}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.studentName}
              </Form.Control.Feedback>
            </Col>

            {/* Mobile Number */}
            <Col md={6}>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                isInvalid={!!errors.mobileNumber}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.mobileNumber}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Department */}
            <Col md={6}>
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                isInvalid={!!errors.department}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.department}
              </Form.Control.Feedback>
            </Col>

            {/* Password */}
            <Col md={6}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.password}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Confirm Password */}
            <Col md={6}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
                disabled={formSubmitted}
              />
              <Form.Control.Feedback
                type="invalid"
                style={{ color: "maroon" }}
              >
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Col>
          </Row>

          {/* Centered Sign Up button and text */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="outline-dark" type="submit">
              Sign Up
            </Button>
            <br />
            <br />

            <p className="tagging" style={{ fontSize: "14px" }}>
              Already have an Account?{" "}&nbsp;
              <a
                href="/student-login"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Login
              </a>
            </p>
          </div>
        </Form>
      </div>
    </Container>
    </div>
  );
}
