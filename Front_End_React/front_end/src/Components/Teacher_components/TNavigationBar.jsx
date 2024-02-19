import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { Teacherlogout } from "../../Utiles/Teacher_utiles/Teacher_Token_util";

export function TNavigationBar(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    Teacherlogout();
    navigate("/teacher-login");
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ margin: 0, padding: 0 }}
    >
      <Container>
        <Navbar.Brand href="#home">Parikshak</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/teacher-dashboard">
              <Nav.Link>Teacher DashBoard</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/teacher-update-password">
              <Nav.Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Update Password
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Button variant="danger" onClick={handleLogout}>
            Teacher LogOut
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
