import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TopHeader } from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";
import { BottomTab } from "./Navbar/BottomTab";
const HomePage = () => {
  const history = useHistory();

  return (
    <div className="container">
      <TopHeader />
      <div className="home-body">
        <h1 className="home-title">Make Your Dream Come True</h1>
        <p className="home-caption">
          Meet your favorite artists, sport teams and parties
        </p>
        <div className="home-input">
          <input
            type="text"
            placeholder="Search"
            className="home-input-box"
          ></input>
          <FontAwesomeIcon className="home-search" icon={faSearch} />
        </div>
        <p className="home-caption">Chennai, Tamilnadu</p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <BottomTab />
    </div>
  );
};
export default HomePage;
