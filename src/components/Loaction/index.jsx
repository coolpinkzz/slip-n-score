/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import Lottie from "react-lottie";
import soapAnimation from "../../../static/soap.json";
import "./index.css";
import { Heading } from "../Heading";

export const Location = () => {
  return (
    <div sx={{ textAlign: "center" }}>
      <div>
        <Heading>Get Direction</Heading>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4115304157935!2d77.60055517465844!3d12.881238516853873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153002d02125%3A0xdfa2573e775fa69!2sSlip%20N%20Score%20Soap%20Football!5e0!3m2!1sen!2sin!4v1693115630995!5m2!1sen!2sin&zoom=15"
        width="70%"
        height="250"
        sx={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
