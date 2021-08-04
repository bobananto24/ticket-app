import React, { useEffect } from "react";
import "../../styles/navbar.css";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export const BottomTab = () => {
  const history = useHistory();

  return (
    <>
      <div className="nav-head">
        <img className="logo" src={logo} alt="Logo" />

        <div>
          <p className="bottom-tab-text">
            © 2021 MYTICKET.COM. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </>
  );
};
