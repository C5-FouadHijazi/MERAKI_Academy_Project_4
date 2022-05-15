import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Campaigns from "./components/Campaigns/Campaigns";

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
        <Navbar />
        <div className="Home-Main-Pic-dev"></div>
        
        <Routes>
          <Route path="/Register" element={<Register />} />

          <Route path="/login" element={<Login />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>

        
        
      </tokenContext.Provider>
    </div>
  );
};

export default App;
