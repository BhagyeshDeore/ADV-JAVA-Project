import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TNavigationBar } from "./TNavigationBar";
import { InputGroup, Form, Button, Alert } from "react-bootstrap";

export function T_UpdatePassword(props) {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !oldPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      setTimeout(() => setError(""), 3000); // Clears error after 3 seconds
      return;
    }

    // Password validation
    if (!/(?=.*[A-Z])/.test(newPassword)) {
      setError("Password must contain at least one uppercase letter");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!/[^a-zA-Z0-9]/.test(newPassword)) {
      setError("Password must contain at least one special character");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password must match");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
    navigate("/teacher-dashboard");
    alert("Updated Successfully");
  };

  return (
    <>
      <TNavigationBar />
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColor: "#837673",
            padding: "20px",
            borderRadius: "8px",
            height: "500px",
            width: "370px",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <h2
            className="heading"
            style={{
              textAlign: "center",
              backgroundColor: "#837673",
              margin: "0",
              padding: "10px",
              borderRadius: "8px 8px 0 0",
              color: "#fff",
            }}
          >
            Teacher Update Form
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <br></br>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">&#128274;</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Enter Old Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">&#128274; </InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Enter New Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">&#128274;</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Confirm New Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </InputGroup>
          <br />
          <div className="d-flex justify-content-center">
            <Button type="submit" variant="primary">
              Update
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
