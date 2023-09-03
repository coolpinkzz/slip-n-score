/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";

export const Card = ({ title, description, url }) => {
  return (
    <div sx={{ borderRadius: "sketchy0" }} className="card-wrapper">
      <img
        sx={{ borderRadius: "sketchy0" }}
        className="team-img"
        src={url}
        alt="team-building"
      />
      <div sx={{ textAlign: "left" }} className="card-body">
        <h2 sx={{ color: "yellow" }}>{title}</h2>
        <p>{description}</p>
        <button sx={{ variant: "buttons.primary", fontSize: "20px" }}>
          Know More
        </button>
      </div>
    </div>
  );
};
