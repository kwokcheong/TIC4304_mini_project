import { Container, Nav, Navbar, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import axios from "../axiosInstance";

function NavigationBar() {
  const navigate = useNavigate();

  const { loggedIn, user } = useContext(AuthContext);

  const logout = async () => {
    await axios.post("/auth/logout");
    navigate("/login");
  };

  const login = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="#">Mini Project</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/protected/users">All Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {loggedIn ? (
              <Button variant="secondary" size="md" onClick={logout}>
                Logout, {user.name}
              </Button>
            ) : (
              <div>
                <Button variant="secondary" size="md" onClick={login}>
                  Login
                </Button>
              </div>
            )}
            <div></div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
