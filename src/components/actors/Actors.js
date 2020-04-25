import React from "react";
import { Link } from "react-router-dom";

import "./actors.style.css";

const Actors = ({ actors }) => {
  return (
    <div className="main-list">
      {actors.map((actor) => {
        return (
          <div className="main-container" key={actor.id}>
            <div className="info">
              <img className="main-image" src={actor.profile_img} alt="" />
              <div className="actor-name">{actor.name}</div>
              <Link
                to={{
                  pathname: `/nominees/${actor.id}`,
                  state: { actor },
                }}
              >
                <button className="btn">View</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
