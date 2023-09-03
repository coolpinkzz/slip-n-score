/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Lottie from "react-lottie";
import soapAnimation from "../../../static/soap.json";
import "./index.css";

export const Hero = () => {
  const bookNowBtn = {
    variant: "buttons.primary",
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: soapAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div
        sx={{
          textAlign: "center",
          position: "relative",
        }}
      >
        <img className="bubble_hero" src={"../../bubble.png"} width={200} />
        <div
          sx={{
            background: "tomato",
          }}
        >
          <h2 sx={{ fontFamily: "circular" }} className="welcome">
            Get ready to slide, score, and make a bubbly mess on the field like
            never before!
            <span sx={{ marginLeft: 10 }}>
              <Lottie options={defaultOptions} height={40} width={40} />
            </span>
          </h2>
        </div>
        <div className="hero-bg">
          <img
            className="hero-img"
            src={"../../hero_bg.png"}
            alt="slip n score"
          />
          <div className="hero-dull"></div>
          <p className="hero-text">
            Score Big with{" "}
            <span className="fadein" sx={{ color: "aqua" }}>
              {" "}
              Bengaluru's
            </span>{" "}
            One and Only{" "}
            <span className="fadein" sx={{ color: "aqua" }}>
              Soapy Football
            </span>{" "}
            Adventure
            <br /> Experience Now!
            <br />
            <button className="hero-btn" sx={bookNowBtn}>
              Book Now
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
