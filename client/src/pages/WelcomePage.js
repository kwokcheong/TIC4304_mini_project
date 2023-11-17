import { Container, Nav, Navbar, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import axios from "../axiosInstance";

function WelcomePage() {
  return <div>I am now logged in</div>;
}

export default WelcomePage;
