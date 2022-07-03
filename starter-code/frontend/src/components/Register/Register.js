import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistered, setIsReg] = useState(false);
  const role = "627a3fc4905d75517127c1f0";

  const addUser = () => {
    axios
      .post("https://attadonation.herokuapp.com/users/", {
        email,
        password,
        country,
        lastName,
        firstName,
        role,
      })
      .then((result) => {
        console.log(result);
        setMessage(result.data.message);
        setIsReg(true);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        setIsReg(false);
      });
  };
  return (
    <div  className="Login-Continer">
      <p>Register:</p>
      <br />

      <div>
        <h6 class="fa-solid fa-f"> : Fitst name :</h6>
        <br />
        <input class="input"
          type={"text"}
          placeholder={"first name"}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>

      <br />
      <div>
        <h6  class="fa-solid fa-l">: Last Name :</h6>
        <br />
        <input class="input"
          type={"text"}
          placeholder={"last name"}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>

      <br />
      <div >
        <h6 class="fa-solid fa-earth-americas"> Country</h6>
        <br />
        <input class="input"
          type={"text"}
          placeholder={"Country*"}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>

      <br />
      <div >
        <h6 class="fa-solid fa-at"> Email:</h6>
        <br />
        <input class="input"
          type={"text"}
          placeholder={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <br />

      <div >
        <h6 class="fa-solid fa-lock"> Password:</h6>
        <br />
        <input class="input"
          type={"password"}
          placeholder={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <br />
      <button onClick={addUser}>Register</button>

      <p className={isRegistered ? "successful" : "error Try Again"}>
        {message}
      </p>
    </div>
  );
};

export default Register;
