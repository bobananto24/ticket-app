import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Authentication } from "../actions";
import "../styles/App.css";
import "../styles/navbar.css";
import { BottomTab, TopHeader } from "./Navbar";
const AdminPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <TopHeader />
      <h1> this is Admin page </h1>
      <div className="fixed-bottom-tab">
        <BottomTab />
      </div>
    </>
  );
};
export default AdminPage;
