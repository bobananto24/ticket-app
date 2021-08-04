import React, { useEffect } from "react";
import "../../styles/navbar.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
export const TopHeader = () => {
  const history = useHistory();
  const isLogged = useSelector((states) => states.Auth.isLogged);

  return !isLogged ? (
    <>
      <div className="nav-head">
        <div>
          <Link className="nav-text">
            <FontAwesomeIcon className="nav-text-orange" icon={faPhone} />
            999999999
          </Link>
          <Link className="nav-text">
            <FontAwesomeIcon className="nav-text-orange" icon={faEnvelope} />
            hello@gmail.com
          </Link>
        </div>
        <div>
          <Link className="nav-text-orange" to="/login">
            SIGN IN
          </Link>
          |
          <Link className="nav-text" to="/sign-up">
            SIGN UP
          </Link>
        </div>
      </div>
      <Navbar />
    </>
  ) : (
    <div style={{ backgroundColor: "#161616" }}>
      <Navbar />
    </div>
  );
};
