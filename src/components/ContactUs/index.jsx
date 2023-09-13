/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Heading } from "../Heading";
import {
  PHONE_NUMBER,
  SLIPNSCOREOFFER,
  VENUE_ADDRESS,
} from "../../utils/constant";
import { SlLocationPin } from "react-icons/sl";
import { CgPhone } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";

export const ContactUs = () => {
  return (
    <div sx={{ fontFamily: "content" }} className="container">
      <Heading sx={{ color: "yellow" }}>
        Contact Slip N Score Soapy Football Arena
      </Heading>
      <div className="contact-wrapper">
        <div>
          <h3 sx={{ fontWeight: "200" }}>
            Have questions or want to book your Slip N Score soap football
            adventure? We're here to help! Feel free to get in touch with us
            using the following contact information:
          </h3>
          <div className="contact">
            <SlLocationPin sx={{ color: "yellow" }} />
            <div>
              <h2>Our Location</h2>
              <p>{VENUE_ADDRESS}</p>
            </div>
          </div>
          <div className="contact">
            <CgPhone sx={{ color: "yellow" }} />
            <div>
              <h2>Phone Number</h2>
              <p>{PHONE_NUMBER}</p>
            </div>
          </div>
          <div className="contact">
            <TfiEmail sx={{ color: "yellow" }} />
            <div>
              <h2>Email Address</h2>
              <p>info@slipnscore.in</p>
            </div>
          </div>
        </div>
        <div className="map-direction">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4115304157935!2d77.60055517465844!3d12.881238516853873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153002d02125%3A0xdfa2573e775fa69!2sSlip%20N%20Score%20Soap%20Football!5e0!3m2!1sen!2sin!4v1693115630995!5m2!1sen!2sin&zoom=15"
            width="90%"
            height="450"
            sx={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
