/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Heading } from "../Heading";
import { SLIPNSCOREOFFER } from "../../utils/constant";

export const AboutUs = () => {
  return (
    <div sx={{ fontFamily: "content" }} className="container">
      <Heading sx={{ color: "yellow" }}>About Slip N Score!</Heading>
      <div className="about-wrapper">
        <div className="about-left">
          <p>
            {" "}
            Welcome to the heart-pounding, laughter-inducing, and
            adrenaline-rushing world of Slip N Score Soapy Football Arena! 🌊⚽
            We are your ultimate destination for an unforgettable fusion of
            soccer and slipperiness. Our one-of-a-kind arena invites
            thrill-seekers, sports enthusiasts, and anyone up for a unique
            adventure to experience the joy of soccer on a soapy stage.
          </p>{" "}
          <p>
            🏟️ Our Arena: Step into our vibrant, action-packed arena where the
            rules of the game are simple: Slip, slide, score! Our specially
            designed, soapy surface promises endless hours of laughter,
            challenge, and excitement.
          </p>{" "}
        </div>
        <div className="about-right">
          <img
            width="100%"
            className="about-img"
            src={"../../collage-soap-football.png"}
            alt="slip n score"
          />
        </div>
      </div>
      <div>
        <h1 sx={{ color: "yellow", margin: "20px 0px" }}>
          🌟 Slip N Score Offers:
        </h1>
        <ul className="slip-score-ul">
          {SLIPNSCOREOFFER.map((list) => {
            return <li>{list}</li>;
          })}
        </ul>
      </div>
      <div>
        <h1 sx={{ color: "yellow", margin: "20px 0px" }}>
          🕒 Slippery Sessions:
        </h1>
        <p className="slip-session-p">
          Each game session lasts for a thrilling 55 minutes. To make sure
          you're all set for action, we ask that you arrive 15 minutes before
          your scheduled scoring time.
        </p>
      </div>
      <div>
        <h1 sx={{ color: "yellow", margin: "20px 0px" }}>🧼 Soap Safety:</h1>
        <p className="slip-session-p">
          Remember to be cautious during the game and keep those soapy hands
          away from your eyes and face.
        </p>
      </div>
      <div>
        <h1 sx={{ color: "yellow", margin: "20px 0px" }}>Join Us</h1>
        <p className="slip-session-p">
          We're excited to invite you to be a part of the Slip N Score family.
          Whether you're planning a day out with friends, a team-building event,
          or a unique birthday party, we have a slippery adventure waiting for
          you.
        </p>
        <p className="slip-session-p">
          Our arena is perfect for birthday parties, corporate events,
          team-building exercises, and just good old-fashioned fun. We offer
          flexible booking options to accommodate your needs, so don't hesitate
          to reach out.
        </p>
        <p className="slip-session-p">
          Stay tuned for updates, promotions, and exciting events by following
          us on social media. Slip N Score Soapy Football Arena is more than a
          game; it's an experience you won't forget.
        </p>
        <p sx={{ color: "yellow" }} className="slip-session-p">
          #SlipNPlay 🌊⚽ #SoapyFootballAdventure
        </p>
      </div>
    </div>
  );
};
