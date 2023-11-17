import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import axios from "../axiosInstance";
import { useMutation } from "react-query";

const loginUser = async (User) => {
  const response = await axios.post("/auth/login", User);
  return response.data;
};

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const mutation = useMutation(loginUser, {
    onSuccess: () => {
      navigate("/protected/users");
    },
  });
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const changeAuthMode = () => {
    navigate("/register");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the mutate function
    mutation.mutate(formValues);
  };

  return (
    <CustomCard>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <br />
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
        </div>
      </form>
    </CustomCard>
  );
}

export default LoginPage;
