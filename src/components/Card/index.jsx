/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { navigate } from "@reach/router";

export const Card = ({ title, description, url, slug }) => {
  console.log(slug);
  return (
    <div sx={{ borderRadius: "sketchy0" }} className="card-wrapper">
      <img
        sx={{ borderRadius: "sketchy0" }}
        className="team-img"
        src={url}
        alt="team-building"
      />
      <div sx={{ textAlign: "left" }} className="card-body">
        <h2 sx={{ color: "yellow", margin: "10px 0px" }}>{title}</h2>
        <p>{description}</p>
        <button
          onClick={() => navigate(`/contact/`)}
          sx={{
            variant: "buttons.primary",
            fontSize: "16px",
            margin: "10px 0px",
            padding: "5px",
          }}
        >
          Know More
        </button>
      </div>
    </div>
  );
};
