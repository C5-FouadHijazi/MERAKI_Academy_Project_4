import React, { useState, useContext } from "react";
import axios from "axios";
import "./style.css";
import { tokenContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);

    
    const navigate = useNavigate();
  const LogIN = () => {
    axios
      .post("https://attadonation.herokuapp.com/login/", {
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
        setMessage(err.res.data.message);
      });
  };
 
  return (
    <div   className="Login-Continer">
      <p>Login:</p>

      <div>
        <h6 class="fa-solid fa-at"> Email:</h6>

        <input class="input"
          type={"text"}
          placeholder={"Email Address*"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <br />
      <div>
        <h6 class="fa-solid fa-lock"> Password:</h6>
        <br />
        <input class="input"
          type={"password"}
          placeholder={"Password*"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <br />
      <button
        onClick={() => {
          if (true) {
            LogIN();
            navigate("/Home");
          } else {
            navigate("/login");
          }
        }}
      >
        Login
      </button>
      <br />
      <a href="">Forgot password?</a>
      <br />
      <h4>Don't have an account?</h4><a href="">Sign up</a>
      <br />
      <h6>
        *By logging in, you agree to our Terms of Use and to receive Atta emails
        & updates and acknowledge that you read our Privacy Policy. This site is
        protected by reCAPTCHA Enterprise and the Google Privacy Policy And
        Terms of Use apply
      </h6>

      <p className={islogin ? "successful" : "error"}>{message}</p>
    </div>
  );
};

export default Login;
