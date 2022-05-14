import React, { useState, useContext } from "react";
import axios from "axios";
import "./style.css";
import { tokenContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken, islogin, setIslogin, message,setMessage  } =
    useContext(tokenContext);

  const LogIN = () => {
    axios
      .post("http://localhost:5000/login/", {
        email: email,
        password: password,
      })

      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
        setIslogin(true);
        
        //clg -> token in ls
        console.log(setIslogin);
      })
      .catch((err) => {
        setMessage(err.res.data.message)
      });
  };

  return (
    <div>
      <p>Login:</p>

      <input
        type={"text"}
        placeholder={"email"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <input
        type={"password"}
        placeholder={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <button onClick={LogIN}>Login</button>

      <h5>
        *By logging in, you agree to our Terms of Use and to receive Atta emails
        & updates and acknowledge that you read our Privacy Policy. This site is
        protected by reCAPTCHA Enterprise and the Google Privacy Policy And
        Terms of Use apply
      </h5>

      <p className={islogin ? "successful" : "error"}>{message}</p>
    </div>
  );
};

export default Login;
