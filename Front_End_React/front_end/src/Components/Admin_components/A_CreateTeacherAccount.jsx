import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ANavigationBar } from "./ANavigationBar";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function A_CreateTeacherAccount(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
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
    if (!mobileRegex.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Mobile number must be 10 digits";
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;
    if (!passwordRegex.test(formData.password)) {
      validationErrors.password =
        "Password must be at least 8 characters, include one uppercase letter, and one special character (!@#$%^&*)";
    }

    // Display validation errors inline
    setErrors(validationErrors);

    // If no errors and form not submitted yet, proceed to form submission
    if (Object.keys(validationErrors).length === 0 && !formSubmitted) {
      try {
        const response = await axios.post(
          "http://localhost:9090/admin/teacher-register",
          formData
        );

        // Handle success
        console.log("Response data:", response.data); // Assuming the backend returns some data
        alert("Account created successfully!");
        setFormSubmitted(true);
        navigate("/admin-dashboard");
      } catch (error) {
        // Handle errors
        console.error("Error creating teacher account:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(
            "Server responded with status code:",
            error.response.status
          );
          console.error("Server response data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received from the server");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      }
    }
  };

  return (
    <>
      <ANavigationBar />
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              disabled={formSubmitted}
            />
            <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
              {errors.name}
            </Form.Control.Feedback>

            {/* Email */}
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
            <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
              {errors.email}
            </Form.Control.Feedback>

            {/* Mobile Number */}
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text" // Change type to "text"
              placeholder="Enter Mobile Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}" // Allow only numeric input
              inputMode="numeric" // Set input mode to "numeric"
              isInvalid={!!errors.phoneNumber}
              disabled={formSubmitted}
            />
            <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
              {errors.phoneNumber}
            </Form.Control.Feedback>

            {/* Password */}
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
            <Form.Control.Feedback type="invalid" style={{ color: "maroon" }}>
              {errors.password}
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
