/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { BEGINNERSGUIDE } from "../../utils/constant";
import { Heading } from "../Heading";
import Lottie from "react-lottie";
import rulesAndReg from "../../../static/rules_and_reg.json";

export const RulesRegulation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rulesAndReg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Heading>Rules and Regulation</Heading>
      <div className="rules-container container">
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
        <div className="rules-right">
          <Lottie
            className="lotti-rules"
            options={defaultOptions}
            height="auto"
            //width={440}
          />
        </div>
      </div>
    </>
  );
};
