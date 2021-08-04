import React, { useEffect } from "react";
import "../../styles/navbar.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const history = useHistory();
  const isLogged = useSelector((states) => states.Auth.isLogged);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".header").className = "header scroll";
    } else {
      document.querySelector(".header").className = "header";
    }
  };
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <div className="header-right">
        <Link className="header-text">Upcoming</Link>
        <Link className="header-text">Events</Link>
        <Link className="header-text">Search</Link>
        <Link className="header-text">Gallery</Link>
        <Link className="header-text">Contact</Link>
        {/* <button className="header-button">Cart</button> */}
      </div>
    </div>
  );
};
export default Navbar;
