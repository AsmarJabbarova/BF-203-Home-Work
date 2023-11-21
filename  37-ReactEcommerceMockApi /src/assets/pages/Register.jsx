import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function Register({ register, setRegister }) {
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
    <>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <FormLabel>Password</FormLabel>
        <Input
          type="number"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </FormControl>
      <Button colorScheme="blue" variant="outline" style={{ marginRight: 10 }}>
        <Link>Login</Link>
      </Button>
      <Button colorScheme="blue" variant="outline" onClick={handleRegister}>
        Register
      </Button>
    </>
  );
}
export default Register;
