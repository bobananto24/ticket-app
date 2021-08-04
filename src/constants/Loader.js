import React from "react";
import Loader from "react-loader-spinner";
import "../styles/App.css";
const LoaderComponent = () => {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color="#2BAD60" />
    </div>
  );
};
export default LoaderComponent;
