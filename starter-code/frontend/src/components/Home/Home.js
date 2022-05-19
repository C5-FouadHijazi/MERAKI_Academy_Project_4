import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { tokenContext } from "../../App";
import Map from "../Map/Map";
import Slider from "../Slider/slider";

const Home = () => {
  const { token, setToken, islogin, setIslogin, message, setMessage } =
    useContext(tokenContext);
  setToken(localStorage.getItem("token"));

  useEffect(() => {
    // axios
    //   .post("http://localhost:5000/")
    //   .then((result) => {
    //     localStorage.setItem("token", result.data.token);
    //     setToken(result.data.token);
    //   })
    //   .catch((err) => {
    //     console.log("Home err:", err.message);
    //     /* setMessage(err.res.data.message); */
    //   });
  }, []);

  return (
    <div>
      <Slider />

      {/* https://m.media-amazon.com/images/I/51ZBlSGcXWS._SL1000_.jpg */}
      <div className="Our-Goles-Main">
        <h1>MISSION, VISION & VALUES</h1>
      </div>

      <div className="Our-Goles">
        <h2 class="fa-solid fa-burst"> MISSION</h2>
        <p>
          Ataa provides relief and development in a dignified manner regardless
          of gender, race, or religion, and works to empower individuals in
          their communities and give them a voice in the world.
        </p>
      </div>

      <div className="Our-Goles">
        <h2 class="fa-solid fa-glasses"> Vision</h2>
        <p>Ataa ,Working together for a world free of poverty.</p>
      </div>

      <div className="Our-Goles">
        <h2 class="fa-solid fa-cubes-stacked"> Values</h2>
        <p>
          These traits express the belief and define the culture of the
          organization. We remain guided by the timeless values and teachings
          provided by the revelations contained within the Qur’an and prophetic
          example.
        </p>
      </div>

      <div className="Our-Location">
        <h2 class="fa-solid fa-location-dot"> We Working In</h2>
      </div>
      <div><Map/></div>

      <div>
        <h5 className="Our-Security">
          Our actions in tackling poverty are marked by excellence in our
          operations and conduct, which are deserving of the people we serve.
        </h5>
      </div>

      <footer className="Social">Facebook | Instegram | Our App</footer>

      <p className={islogin ? "successful" : "error"}>{message}</p>
    </div>
  );
};

export default Home;
