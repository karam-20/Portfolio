import React from "react";
import loader from "../components/loader.mp4";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <video src={loader} autoPlay loop muted></video>
    </div>
  );
};

export default Loader;
