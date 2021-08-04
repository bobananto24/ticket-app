import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/App.css";
import "../styles/navbar.css";
import { BottomTab, TopHeader } from "./Navbar";
const ProfilePage = () => {
  return (
    <>
      <TopHeader />
      <h1> this is profile page </h1>
      <div className="fixed-bottom-tab">
        <BottomTab />
      </div>
    </>
  );
};
export default ProfilePage;
