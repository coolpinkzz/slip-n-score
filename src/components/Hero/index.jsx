/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Lottie from "react-lottie";
import soapAnimation from "../../../static/soap.json";
import "./index.css";
import { StaticImage } from "gatsby-plugin-image";

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
          <h2 sx={{ fontFamily: "content" }} className="welcome">
            Get ready to slide, score, and make a bubbly mess like never before!
            <span sx={{ marginLeft: 10 }}>
              <Lottie options={defaultOptions} height={40} width={40} />
            </span>
          </h2>
        </div>
        <div className="hero-bg">
          <StaticImage
            className="hero-img"
            src="https://ik.imagekit.io/slipnscore/hero_bg.png?updatedAt=1695709257059"
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
              Coming Soon
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
