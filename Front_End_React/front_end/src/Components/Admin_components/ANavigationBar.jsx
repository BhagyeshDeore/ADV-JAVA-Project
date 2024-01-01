import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import { Adminlogout } from "../../Utiles/Admin_utiles/Admin_Token_util";

export function ANavigationBar(props){
  const navigate = useNavigate();
  const handleLogout = () =>{
              Adminlogout();
            navigate('/admin-login')}
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Parikshak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                <LinkContainer to="/admin-dashboard">
                    <Nav.Link >Admin DashBoard</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/admin-create-new-teacher-account">
                    <Nav.Link >Register New Teacher</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/admin-students-register-request">
                    <Nav.Link >Verify Students register</Nav.Link>
                </LinkContainer>

               
                
            </Nav>
            <Button variant="danger" onClick={handleLogout}>Admin LogOut</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}