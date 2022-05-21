import "./Navbar.css";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";

const Navbar = () => {
  const [clciked, setClciked] = useState(false);

  const { token, setToken, islogin, setIslogin } = useContext(tokenContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    setIslogin(false);
    setToken("");
  };

  /*  const handleClick = () => {
    setClciked(true);
  }; */

  return (
    <div className="Navbar">
      <h1
        onClick={() => {
          navigate("/home");
        }}
        className="Navbar-logo"
      >
        Ataa<i className="fa-solid fa-seedling"></i>
      </h1>
      {/* how to  */}
      <ul className="Nav-menu">
        {islogin === true ? (
          <>
            <li>
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/Campaigns">
                Campaigns
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/ContactUs">
                Us
              </Link>
            </li>

            <li>
              <Link className="nav-link" to="/logout" onClick={logOut}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Campaigns">
                Campaigns
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Register/">
                Sigin-Up
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/ContactUs">
                Us
              </Link>
            </li>
          </>
        )}
      </ul>

      {/*   <div className="menu-icon" /*  onClick={handleClick} >
        <i className={ clciked ? "fas fa-times" : "fas fa-bars"}></i>
        </div> */}

      {/*  {MenuItemes.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })} */}
    </div>
  );
};

export default Navbar;
