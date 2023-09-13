/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { BEGINNERSGUIDE } from "../../utils/constant";
import { Heading } from "../Heading";

export const RulesRegulation = () => {
  return (
    <>
      <Heading>In Depth Beginners Guide</Heading>
      <div className="about-container">
        <div
          sx={{ fontFamily: "circular", borderRadius: "sketchy0" }}
          className="about-content"
        >
          <ul>
            {BEGINNERSGUIDE?.map((point) => {
              return <li>👉 {point}</li>;
            })}
          </ul>
        </div>
        {/*<div className="about-img-wrapper">
          {" "}
          <img
            width="100%"
            className="about-img"
            src={"../../collage-soap-football.png"}
            alt="slip n score"
          />
        </div>*/}
      </div>
    </>
  );
};
