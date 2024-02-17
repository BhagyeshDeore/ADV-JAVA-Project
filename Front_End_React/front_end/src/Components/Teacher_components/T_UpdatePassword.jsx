import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TNavigationBar } from "./TNavigationBar";
import { InputGroup, Form, Button, Alert, Container } from "react-bootstrap";
import { updatePassword } from "../../Services/Teacher_services/Teacher_APIs";
import { getTeacherID } from "../../Utiles/Teacher_utiles/Teacher_Token_util";
import backgroundImage from "./image.jpg";

export function T_UpdatePassword(props) {
  const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    teacherId: getTeacherID(),
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const teacherId = getTeacherID();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (
      !formData.email ||
      !formData.oldPassword ||
      !formData.newPassword ||
      !confirmPassword
    ) {
      setError("All fields are required");
      setTimeout(() => setError(""), 3000); // Clears error after 3 seconds
      return;
    }

    // Password validation
    if (!/(?=.*[A-Z])/.test(formData.newPassword)) {
      setError("Password must contain at least one uppercase letter");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!/[^a-zA-Z0-9]/.test(formData.newPassword)) {
      setError("Password must contain at least one special character");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (formData.newPassword !== confirmPassword) {
      setError("New password and confirm password must match");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setError("");
    navigate("/teacher-dashboard");
    alert("Updated Successfully");
    UpdatePasswordOnAPI();
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const UpdatePasswordOnAPI = async () => {
    try {
      const result = await updatePassword(formData);
      console.log("from updatePassword api ", result.data);
    } catch (error) {
      console.log("from updatePassword api", error);
    }
  };

  return (
    <>
      <TNavigationBar />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Path to your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          marginTop: "5px", // Set minimum height to cover the entire viewport
        }}
      >
        <Form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: "#837673",
              padding: "20px",
              borderRadius: "8px",
              height: "450px",
              width: "370px",
              margin: "auto",
              marginTop: "0px",
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
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                // onChange={(e) => setUsername(e.target.value)}
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
                // value={oldPassword}
                value={formData.oldPassword}
                onChange={(e) =>
                  handleInputChange("oldPassword", e.target.value)
                }
                // onChange={(e) => setOldPassword(e.target.value)}
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
                // value={newPassword}
                value={formData.newPassword}
                onChange={(e) =>
                  handleInputChange("newPassword", e.target.value)
                }
                // onChange={(e) => setNewPassword(e.target.value)}
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
      </div>
    </>
  );
}
