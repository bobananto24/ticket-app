import React from "react";
import Loader from "react-loader-spinner";
import { CircularProgress } from '@material-ui/core';
import "../styles/App.css";
const LoaderComponent = () => {
  return (
    <div className="loader">
      <CircularProgress size={100} />
      {/* <Loader type="Puff" color="#2BAD60" /> */}
      
    </div>
  );
};
export default LoaderComponent;
