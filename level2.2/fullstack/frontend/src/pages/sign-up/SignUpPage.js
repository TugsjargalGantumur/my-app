import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "../../components";
import axios from "axios";
import { useUserContext } from "../../context";

export const SignUpPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { setCurrentUser } = useUserContext();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username && formData.email && formData.password) {
      try {
        const response = await axios.post("http://localhost:9000/auth/signup", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });

        const { data } = response;

        localStorage.setItem("user", JSON.stringify(data));

        setCurrentUser(data);

        setFormData({
          username: "",
          email: "",
          password: "",
        });

        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    } else {
      alert("Please enter all fields");
    }
  };

  return (
    <div id="sign-up-container">
      <form id="form-container">
        <h1>Sign Up</h1>

        <TextField
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <TextField
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Sign Up
        </Button>

        <Link
          to="/sign-in"
          style={{ textDecoration: "none", color: "black", fontSize: "14px" }}
        >
          Already have an account?
        </Link>

        {error && <p style={{ color: "red", fontSize: "12px" }}> {error}</p>}
      </form>
    </div>
  );
};
