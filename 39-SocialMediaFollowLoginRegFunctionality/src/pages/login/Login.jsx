import { Container } from "react-bootstrap";
import "./login.scss";
import { FaHome } from "react-icons/fa";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Icon } from "react-icons-kit";

import axios from "axios";
import { TextField } from "@mui/material";

export default function LoginPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://6556185084b36e3a431f047a.mockapi.io/api/user")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="login">
      <div className="top">
        <Container>
          <div className="text">
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
            <span>Login</span>
          </div>
        </Container>
      </div>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Login</h2>

            <div>
              <div className="input">
                <label>Username *</label>
                <div className="input-username">
                  <TextField
                    className="username"
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                    name="username"
                  />
                </div>
              </div>

              <div className="input">
                <label>Password *</label>
                <div className="inputpassword">
                  <TextField
                    className="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    name="password"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  users.forEach((element) => {
                    if (
                      element.name === user &&
                      element.password === password
                    ) {
                      localStorage.setItem("user", JSON.stringify(element));
                      sessionStorage.setItem("userlogin", JSON.stringify(true));
                      navigate("/");
                      window.location.reload();
                    } else {
                      console.log("user not found!");
                    }
                  });
                }}
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="switch-login">
              <Link to={"/register"}> Or Create An Account</Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
