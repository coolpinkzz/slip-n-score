/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Heading } from "../Heading";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

export const Footer = () => {
  return (
    <div sx={{ fontFamily: "content" }} className="footer-main">
      <div className="footer-container">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>info@slipnscore.in</p>
        </div>
        <div className="address">
          <h2>Address</h2>
          <p>
            156/8D, 19th Main Road, Bhagwati Layout, Hulimavu, Bannerghatta Road
          </p>
        </div>
        <div className="links">
          <h2>Links</h2>
          <p>
            <a href="/about">About</a>{" "}
          </p>
          <p>
            <a href="/about">Contact</a>
          </p>
          <p>
            <a href="/about">Activites</a>
          </p>
        </div>
        <div className="social">
          <h2>Social</h2>
          <div className="icon-wrapper">
            <a href="https://www.instagram.com/slipnscoreblr">
              <BsInstagram />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61550740211013">
              <AiFillFacebook />
            </a>

            <a href="https://www.youtube.com/@slipnscore">
              <AiFillYoutube className="yt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
