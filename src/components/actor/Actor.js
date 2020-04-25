import React from "react";
import { Link } from "react-router-dom";

import winnerImg from "../../assets/oscar.jpg";

import "./actor.style.css";

const Actor = (props) => {
  const {
    profile_img,
    name,
    film_synopsis,
    movie,
    winner,
  } = props.location.state.actor;

  return (
    <div className="main-container">
      {winner !== true ? (
        <h2 className="the-title">NOMINEE</h2>
      ) : (
        <h2 className="the-title">
          WINNER{" "}
          <span>
            <img className="winner-img" src={winnerImg} alt="" />
          </span>
        </h2>
      )}
      <div className="details">
        <h2 className="name">{name}</h2>
        <img className="img" src={profile_img} alt="" />
        <h3 className="movie-title">{movie}</h3>
        <h3 className="synopsis">Film Synposis</h3>
        <p align="justify" className="text">
          {" "}
          {film_synopsis}
        </p>
      </div>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
    </div>
  );
};

export default Actor;
