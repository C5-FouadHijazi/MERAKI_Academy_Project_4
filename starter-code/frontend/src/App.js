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

import Contact from "./Contsct Us/ContactUs";
/* import { MessengerChat, showMessenger, hideMessenger, showDialog, hideDialog, setMessengerHeight } from 'react-messenger-customer-chat'; */


export const tokenContext = createContext();

const App = () => {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [islogin, setIslogin] = useState(false);

  return (
    <div className="App">
      
     {/*   <button onClick={() => {showMessenger(true)}}>show messenger</button>
      <button onClick={() => {hideMessenger()}}>hide messenger</button>
      <button onClick={() => {showDialog()}}>show dialog</button>
      <button onClick={() => {hideDialog()}}>hide dialog</button>
      <button onclick={() => {setMessengerBottomSpacing(100)}}>set chat 100px in bottom spacing<button> */}

     {/*  <MessengerChat pageId='123456789101112' /> */}

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
        

        <Routes>
          <Route path="/Register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/campaigns" element={<Campaigns />} />

          <Route path="/payment" element={<StripeContainer />} />
          


          <Route path="/campaigns/setiation/:id" element={<Situations />} />

          <Route path="/Home" element={<Home />} />

          <Route path="/" element={<Home />} />

          <Route path="/ContactUs" element={<Contact />} />



        </Routes>
      </tokenContext.Provider>
    </div>
  );
};

export default App;
