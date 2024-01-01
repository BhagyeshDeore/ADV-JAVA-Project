import { Navbar, Container, Nav, Button } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import { useNavigate } from "react-router-dom";
import { Studentlogout } from "../../Utiles/Student_utiles/Student_Token_util";

export function SNavigationBar(props){
  const navigate = useNavigate();
  const handleLogout = () =>{
              Studentlogout();
            navigate('/student-login')}
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Parikshak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                <LinkContainer to="/student-dashboard">
                    <Nav.Link >Student DashBoard</Nav.Link>
                </LinkContainer>

               
                
            </Nav>
            <Button variant="danger" onClick={handleLogout}>Student LogOut</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}