import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Authentication } from "../actions";
import "../styles/App.css";
import "../styles/navbar.css";
import { BottomTab, TopHeader } from "./Navbar";
const UserPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(Authentication(false));
    history.push("/login");
  };
  const handleProfile = () => {
    history.push("/user/profile");
  };
  return (
    <>
      <TopHeader />
      <h1> this is User page </h1>
      <input type="button" value={"LogOut"} onClick={handleLogout} />
      <input type="button" value={"Profile"} onClick={handleProfile} />
      <div className="fixed-bottom-tab">
        <BottomTab />
      </div>
    </>
  );
};
export default UserPage;
