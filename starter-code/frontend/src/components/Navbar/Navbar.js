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

  const handleClick = () => {
    setClciked(true);
  };

  return (
    <div className="Navbar">
      <h1 className="Navbar-logo">
        Ataa<i className="fa-solid fa-seedling"></i>
      </h1>
      {/* how to  */}
      <ul className="Nav-menu">
        {islogin === true ? (
          <>
            <li className="nav-link">
              <Link to="/Home">Home</Link>
            </li>

            <li className="nav-link">
              <Link to="/Campaigns">Campaigns</Link>
            </li>

            <li className="nav-link">
              <Link to="/ContactUs">Us</Link>
            </li>

            <li className="nav-link">
              <Link to="/logout" onClick={logOut}>
                logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-link">
              <Link to="/Home">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/Campaigns">Campaigns</Link>
            </li>
            <li className="nav-link">
              <Link to="/Register/">Register</Link>
            </li>
            <li className="nav-link">
              <Link to="/login">login</Link>
            </li>
            <li className="nav-link">
              <Link to="/ContactUs">Us</Link>
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
