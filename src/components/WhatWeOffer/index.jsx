/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Services } from "../../utils/constant";
import { Card } from "../Card";

export const WhatWeOffer = () => {
  return (
    <div sx={{ fontFamily: "content" }} className="service-wrapper">
      <h1>What we offer</h1>
      <div className="cards-wrapper">
        {Services?.map((item) => {
          return (
            <Card
              title={item?.title}
              description={item?.description}
              url={item?.url}
            />
          );
        })}
      </div>
    </div>
  );
};
