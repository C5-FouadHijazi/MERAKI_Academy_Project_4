import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Campaigns from "./components/Campaigns/Campaigns";
import StripeContainer from "./components/Payment/StripeContainer";
import Home from "./components/Home/Home";

import Situations from "./components/Situations/situations";


export const tokenContext = createContext();

const App = () => {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [islogin, setIslogin] = useState(false);

  return (
    <div className="App">
      <tokenContext.Provider
        value={{
          token,
          setToken,
          message,
          setMessage,
          islogin,
          setIslogin,
        }}
      >
        {/* <Navigation /> */}
        <Navbar />

        <Routes>
          <Route path="/Register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/campaigns" element={<Campaigns />} />

          <Route path="/payment" element={<StripeContainer />} />
          


          <Route path="/campaigns/setiation/:id" element={<Situations />} />

          <Route path="/Home" element={<Home />} />
        </Routes>
      </tokenContext.Provider>
    </div>
  );
};

export default App;
