import React, { useState, useContext , useEffect  } from "react";
import axios from "axios";
import "./Home.css";
import { tokenContext } from "../../App";

const Home = () => {
  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  setToken(localStorage.getItem("token"));

  useEffect(() => {
    axios
      .post("http://localhost:5000/", {})
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setToken(result.data.token);
      })
      .catch((err) => {
        setMessage(err.res.data.message);
      });
  }, []);

  return (
    <div>
      
      <div className="Home-Main-Pic-dev"></div>
<div>
  <h1>MISSION, VISION & VALUES</h1>
</div>


<div>
  <h2>MISSION</h2>
  <p>Ataa provides relief and development in a dignified manner regardless of gender, race, or religion, and works to empower individuals in their communities and give them a voice in the world.</p>
</div>

<div>
  <h2>Vision
</h2>
  <p>Ataa ,Working together for a world free of poverty.</p>
</div>

<div>
  <h2>Values
</h2>
  <p>These traits express the belief and define the culture of the organization. We remain guided by the timeless values and teachings provided by the revelations contained within the Qur’an and prophetic example.</p>
</div>

<div><h5>Our actions in tackling poverty are marked by excellence in our operations and conduct, which are deserving of the people we serve.

  
  <footer>Facebook | Instegram </footer>

</h5></div>
      <p className={islogin ? "successful" : "error"}>{message}</p>
    </div>
  );
};

export default Home;
