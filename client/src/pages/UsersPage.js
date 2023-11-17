import { Container, Nav, Navbar, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "../axiosInstance";

const UsersPage = () => {
  const fetchAllUsers = async () => {
    const response = await axios.get("/user/show");
    return response.data;
  };

  const { data, error, isError, isLoading } = useQuery(
    "allUsers",
    fetchAllUsers
  );

  if (isLoading) {
    return null;
  }

  if (isError) {
    console.error("Error fetching users:", error);
  }

  // console.log("Login status:", data);
  // const loggedIn = data?.loggedIn || false;
  // const user = data?.user || null;

  return <pre> {JSON.stringify(data, null, 2)}</pre>;
};

export default UsersPage;
