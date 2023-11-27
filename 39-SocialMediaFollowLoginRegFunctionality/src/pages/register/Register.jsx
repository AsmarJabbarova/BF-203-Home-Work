import { Container } from "react-bootstrap";
import "./register.scss";
import { FaHome } from "react-icons/fa";
// import ReactDOM from "react-dom";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { TextField } from "@mui/material";

export default function RegisterPage() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = axios.post(
        "https://6556185084b36e3a431f047a.mockapi.io/api/user",
        {
          name: name,
          email: email,
          password: pass,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
    }
    navigate("/login");
  };
  return (
    <div className="register">
      <div className="top">
        <Container>
          <div className="text">
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
            <span>Register</span>
          </div>
        </Container>
      </div>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Register</h2>

            <div className="input">
              <label>Email address *</label>
              <TextField
                className="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
              />
            </div>

            <div className="input">
              <label>Username *</label>
              <TextField
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="username"
                name="username"
              />
            </div>

            <div className="input">
              <label>Password *</label>
              <div className="inputpassword">
                <TextField
                  className="password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  name="password"
                />
              </div>
            </div>

            <button type="submit" onClick={handleRegister}  >
              Sign In
            </button>

            <div className="switch-login">
              <Link to={"/login"}> Or Login</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
