import React, { createContext } from "react";
import { useQuery } from "react-query";
import axios from "./axiosInstance";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const fetchLoginStatus = async () => {
    const response = await axios.get("/auth/status");
    return response.data;
  };

  const { data, error, isError, isLoading } = useQuery(
    "loginStatus",
    fetchLoginStatus
  );

  if (isLoading) {
    // Return a loading component or null depending on your design
    return null;
  }

  if (isError) {
    console.error("Error checking login status:", error);
    // Handle error state (for instance, show an error message to the user)
  }
  if (!isError && !isLoading) {
    console.log("Login status:", data);
    const loggedIn = data?.loggedIn || false;
    const user = data?.user || null;

    return (
      <AuthContext.Provider value={{ loggedIn, user }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return null;
};
