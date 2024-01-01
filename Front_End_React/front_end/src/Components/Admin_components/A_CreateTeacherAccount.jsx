import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ANavigationBar } from "./ANavigationBar";

export function A_CreateTeacherAccount(props) {
  const [formData, setFormData] = useState({
    teacherName: "",
    teacherEmail: "",
    teacherMobileNumber: "",
    teacherPassword: "",
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

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "") {
        validationErrors[key] = "This field is required";
      }
    });

    // Validate email format
    if (!formData.teacherEmail.includes("@")) {
      validationErrors.teacherEmail = "Invalid email format";
    }

    // Validate mobile number format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.teacherMobileNumber)) {
      validationErrors.teacherMobileNumber =
        "Mobile number must be 10 digits";
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
    if (!passwordRegex.test(formData.teacherPassword)) {
      validationErrors.teacherPassword =
        "Password must be at least 8 characters, include one uppercase letter, and one special character (!@#$%^&*)";
    }

    // Display validation errors inline
    setErrors(validationErrors);

    // If no errors and form not submitted yet, proceed to form submission
    if (Object.keys(validationErrors).length === 0 && !formSubmitted) {
      // Set formSubmitted to true
      setFormSubmitted(true);
      // TODO: Perform any additional actions upon successful form submission
      alert("Account created successfully!");
    }
  };

  return (
    <>
    <ANavigationBar/>
    <Container style={{ textAlign: "center" }}>
      <div
        className="container"
        style={{
          backgroundColor: "grey",
          width: "400px", // Adjusted width for a smaller form
          marginTop: "40px",
          borderRadius: "15px",
          border: "2px solid black",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          padding: "10px", // Adjusted padding for a smaller form
        }}
      >
        <h2
          className="heading"
          style={{
            textAlign: "center",
            
            margin: "0",
            paddingBottom: "10px",
            marginLeft: "-11.5px",
            marginRight: "-11.5px",
            borderRadius: "10px 15px 0 0",
            paddingTop: "inherit",
          }}
        >
          Create Teacher Account
        </h2>
        <Form onSubmit={handleSubmit}>
          {/* Teacher Name */}
          <Form.Label>Teacher Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Teacher Name"
            name="teacherName"
            value={formData.teacherName}
            onChange={handleChange}
            isInvalid={!!errors.teacherName}
            disabled={formSubmitted}
          />
          <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
            {errors.teacherName}
          </Form.Control.Feedback>

          {/* Email */}
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            name="teacherEmail"
            value={formData.teacherEmail}
            onChange={handleChange}
            isInvalid={!!errors.teacherEmail}
            disabled={formSubmitted}
          />
          <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
            {errors.teacherEmail}
          </Form.Control.Feedback>

          {/* Mobile Number */}
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text" // Change type to "text"
            placeholder="Enter Mobile Number"
            name="teacherMobileNumber"
            value={formData.teacherMobileNumber}
            onChange={handleChange}
            pattern="[0-9]{10}" // Allow only numeric input
            inputMode="numeric" // Set input mode to "numeric"
            isInvalid={!!errors.teacherMobileNumber}
            disabled={formSubmitted}
          />
          <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
            {errors.teacherMobileNumber}
          </Form.Control.Feedback>

          {/* Password */}
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="teacherPassword"
            value={formData.teacherPassword}
            onChange={handleChange}
            isInvalid={!!errors.teacherPassword}
            disabled={formSubmitted}
          />
          <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
            {errors.teacherPassword}
          </Form.Control.Feedback>

          {/* Centered Create button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="outline-dark" type="submit">
              Create
            </Button>
          </div>
        </Form>
      </div>
    </Container>
    </>
  );
}
