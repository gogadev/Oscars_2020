import React from "react";

import Actors from "../../components/actors/Actors";

import oscarIcon from "../../assets/icon.png";

import "./nominees.style.css";

const Nominees = ({ actors }) => {
  return (
    <div className="nominees">
      <h1 className="main-title">
        Oscar Nominees <span className="year">2020</span>
      </h1>
      <img src={oscarIcon} alt="" />
      <h2 className="section-title">actors in a leading role</h2>
      <Actors actors={actors} />
    </div>
  );
};

export default Nominees;
