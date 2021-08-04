import React, { useEffect } from "react";
import "../../styles/navbar.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector,useDispatch } from "react-redux";
import { Authentication } from "../../actions";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const isLogged = useSelector((states) => states.Auth.isLogged);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>
    window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".header").className = "header headerscroll";
    } else {
      document.querySelector(".header").className = "header";
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(Authentication(false));
    history.push("/login");
  };
  const handleProfile = () => {
    history.push("/admin/profile");
  };
 
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" onClick={()=>history.push("/")} />
      <div className="header-right">
        <Link className="header-text">Upcoming</Link>
        <Link className="header-text">Events</Link>
        <Link className="header-text">Search</Link>
        {isLogged ? <Link className="header-text" onClick={handleProfile}>Profile</Link>: <Link className="header-text">Gallery</Link>}
        {isLogged ? <Link className="header-text" onClick={handleLogout}>Log Out</Link>:null}
        
      </div>
    </div>
  );
};
export default Navbar;
