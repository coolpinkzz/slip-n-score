/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Heading } from "../Heading";
import { BsInstagram } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { PHONE_NUMBER, VENUE_ADDRESS } from "../../utils/constant";

export const Footer = () => {
  return (
    <div sx={{ fontFamily: "content" }} className="footer-main">
      <div className="footer-container">
        <div className="get-in-touch">
          <h3>Get in Touch</h3>
          <p>
            <a href="tel:9886011023">{PHONE_NUMBER}</a>{" "}
          </p>
          <p>
            <a href="mailto:info@slipncore.in">info@slipncore.in</a>{" "}
          </p>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p className="address-content">{VENUE_ADDRESS}</p>
        </div>
        <div className="links">
          <h3>Links</h3>
          <p className="link-list">
            <a href="/about">About</a>{" "}
          </p>
          <p className="link-list">
            <a href="/contact">Contact</a>
          </p>
          <p className="link-list">
            <a href="/rules">Rules and Regulation</a>
          </p>
          <p className="link-list">
            <a href="/terms-and-condition">Terms and Conditions</a>
          </p>
          <p className="link-list">
            <a href="/privacy">Privacy and Policy</a>
          </p>
        </div>
        <div className="social">
          <h3>Social</h3>
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
            <a href="https://twitter.com/slipnscoreblr">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
