import axios from "axios";
import "./Login.scss";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { Button, ButtonGroup } from "@chakra-ui/react";

function Login() {
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
    <>
      <div className="mylogin">
        <FormControl className="group">
          <div>
            <FormLabel>Username</FormLabel>
            <Input
              onChange={(e) => {
                setUser(e.target.value);
              }}
              type="text"
            />
          </div>
          <div>
            <FormLabel>Password</FormLabel>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="number"
            />
          </div>
        </FormControl>

        <Button
          colorScheme="blue"
          onClick={() => {
        
                users.forEach((element) => {
                  if (element.name === user) {
                    localStorage.setItem("user", JSON.stringify(element));
                    sessionStorage.setItem("userlogin", JSON.stringify(true));
                    navigate("/");
                    window.location.reload();
                  } else {
                    console.log("user not found!");
                  }
                });
          
           
          }}
        >
          Login
        </Button>
        <Button
          colorScheme="blue"
          variant="outline"
          style={{ marginRight: 10 }}
        >
          <Link to={"/register"}>Register</Link>
        </Button>
      </div>
    </>
  );
}
export default Login;
