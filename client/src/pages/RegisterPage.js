import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../components/CustomCard";
import axios from "../axiosInstance";
import { useMutation } from "react-query";

const registerUser = async (newUser) => {
  const response = await axios.post("/user/add", newUser);
  return response.data;
};

function RegisterPage() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const mutation = useMutation(registerUser);
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
    navigate("/login");
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
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="name"
              name="name"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
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
              placeholder="Password"
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
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
        </div>
      </form>
    </CustomCard>
  );
}

export default RegisterPage;
