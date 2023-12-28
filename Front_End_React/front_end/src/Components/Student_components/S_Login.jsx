import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export function S_Login(props) {
  const [formData, setFormData] = useState({
    studentId: "",
    studentPassword: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();

        // Validate form fields
        const validationErrors = {};

        // Check for empty fields
        Object.keys(formData).forEach((key) => {
        if (formData[key].trim() === "") {
            validationErrors[key] = "This field is required";
        }
        });

        // Display validation errors inline
        setErrors(validationErrors);

        // If no errors, proceed with login or perform necessary actions
        if (Object.keys(validationErrors).length === 0) {
        // Add your login logic here
        alert("Login successful!");
        }
  };

  return (
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
          Student Login
        </h2><br/>
        <Form style={{ paddingTop: "10px", paddingBottom: "5px" }} onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* Student ID */}
            <Col md={12}>
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student ID"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                isInvalid={!!errors.studentId}
              />
              <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentId}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Password */}
            <Col md={12}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="studentPassword"
                value={formData.studentPassword}
                onChange={handleChange}
                isInvalid={!!errors.studentPassword}
              />
              <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentPassword}
              </Form.Control.Feedback>
            </Col>
          </Row>

          {/* Login Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="outline-dark" type="submit">
                Login
            </Button>

            {/* Don't have an Account? Sign Up */}
            <p className="tagging" style={{ fontSize: "13px", marginTop: "10px" }}>
                Don't have an Account?{" "}
                <a
                href="/student-register"
                style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
                >
                Sign Up
                </a>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  );
}
