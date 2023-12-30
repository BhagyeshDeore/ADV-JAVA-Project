import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export function A_Login(props) {
  const [formData, setFormData] = useState({
    adminUsername: "",
    adminPassword: "",
  });

  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check hardcoded values for login
    if (
      formData.adminUsername === "admin" &&
      formData.adminPassword === "Admin@123"
    ) {
      // Clear any previous error
      setError(null);

      // Display success message using alert
      window.alert("Login successful!");

      // Reset the form and state
      setFormData({
        adminUsername: "",
        adminPassword: "",
      });
      setFormSubmitted(false);
    } else {
      setError("Invalid username or password.");
    }

    // Set formSubmitted to true
    setFormSubmitted(true);
  };

  return (
    <Container style={{ textAlign: "center" }}>
      <div
        className="container"
        style={{
          backgroundColor: "grey",
          width: "300px",
          marginTop: "40px",
          borderRadius: "15px",
          border: "2px solid black",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          padding: "10px",
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
            borderRadius: "15px 15px 0 0",
            paddingTop: "inherit",
          }}
        >
          Admin Login
        </h2>
        <Form onSubmit={handleSubmit}>
          {/* Admin Username */}
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Admin Username"
            name="adminUsername"
            value={formData.adminUsername}
            onChange={handleChange}
            disabled={formSubmitted}
          />

          {/* Admin Password */}
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Admin Password"
            name="adminPassword"
            value={formData.adminPassword}
            onChange={handleChange}
            disabled={formSubmitted}
          />

          {/* Display error message */}
          {error && <p style={{ color: "maroon" }}>{error}</p>}

          {/* Centered Login button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button variant="outline-dark" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
