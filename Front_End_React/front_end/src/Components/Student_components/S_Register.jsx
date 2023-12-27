import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export function S_Register(props) {
  const [formData, setFormData] = useState({
    studentId: "",
    studentEmail: "",
    studentName: "",
    studentMobileNumber: "",
    studentDepartment: "",
    studentPassword: "",
    confirmPassword: "",
    otp: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

        // Validate form fields
        const validationErrors = {};

        // Check for empty fields (except for OTP if form is submitted)
        Object.keys(formData).forEach((key) => {
        if (
            (key !== "otp" && formData[key].trim() === "") ||
            (key === "otp" && formSubmitted && formData[key].trim() === "")
        ) {
            validationErrors[key] = "This field is required";
        }
        });

        // Validate email format
        if (!formData.studentEmail.includes("@")) {
        validationErrors.studentEmail = "Invalid email format";
        }

        // Validate mobile number format
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(formData.studentMobileNumber)) {
        validationErrors.studentMobileNumber =
            "Mobile number must be 10 digits";
        }

        // Validate password and confirm password
        if (formData.studentPassword !== formData.confirmPassword) {
        validationErrors.confirmPassword = "Passwords do not match";
        }

        // Display validation errors inline
        setErrors(validationErrors);

        // If no errors and form not submitted yet, proceed to OTP phase
        if (
        Object.keys(validationErrors).length === 0 &&
        !formSubmitted &&
        formData.otp.trim() === ""
        ) {
        // Set formSubmitted to true
        setFormSubmitted(true);
        }
        // If OTP is filled and form is submitted, show success pop-up
        else if (
        Object.keys(validationErrors).length === 0 &&
        formSubmitted &&
        formData.otp.trim() !== ""
        ) {
        // Display a pop-up or perform any other action indicating successful submission
        alert("Form submitted successfully!");
        }
  };

  return (
    <container style={{textAlign:'center'}}>
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
                <Form.Label>Student Id</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Student Id"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                isInvalid={!!errors.studentId}
                disabled={formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentId}
                </Form.Control.Feedback>
            </Col>

            {/* Email */}
            <Col md={6}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleChange}
                isInvalid={!!errors.studentEmail}
                disabled={formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentEmail}
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
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                isInvalid={!!errors.studentName}
                disabled={formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentName}
                </Form.Control.Feedback>
            </Col>

            {/* Mobile Number */}
            <Col md={6}>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                type="number"
                placeholder="Enter Mobile Number"
                name="studentMobileNumber"
                value={formData.studentMobileNumber}
                onChange={handleChange}
                isInvalid={!!errors.studentMobileNumber}
                disabled={formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentMobileNumber}
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
                name="studentDepartment"
                value={formData.studentDepartment}
                onChange={handleChange}
                isInvalid={!!errors.studentDepartment}
                disabled={formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentDepartment}
                </Form.Control.Feedback>
            </Col>

            {/* Password */}
            <Col md={6}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter Password"
                name="studentPassword"
                value={formData.studentPassword}
                onChange={handleChange}
                isInvalid={!!errors.studentPassword}
                disabled={formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.studentPassword}
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
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.confirmPassword}
                </Form.Control.Feedback>
            </Col>

            {/* OTP */}
            <Col md={6}>
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                isInvalid={!!errors.otp}
                disabled={!formSubmitted}
                />
                <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
                {errors.otp}
                </Form.Control.Feedback>
            </Col>
            </Row>

            {/* Centered Sign Up button and text */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
                <Button variant="outline-dark" type="submit" >
                Sign Up
                </Button>
                <br/><br/>

                <p className="tagging" style={{ fontSize: "14px" }}>
                Already have an Account?{" "}&nbsp;
                <a
                    href="/student-login"
                    style={{ color: "black", textDecoration: "none", fontWeight: 'bold' }}
                >
                    Login
                </a>
                </p>
            </div>
        </Form>
        </div>
    </container>
  );
}
