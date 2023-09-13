/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { Services } from "../../utils/constant";
import { Card } from "../Card";
import { Heading } from "../Heading";

export const WhatWeOffer = () => {
  return (
    <div sx={{ fontFamily: "content" }} className="service-wrapper">
      <Heading>What we offer</Heading>
      <div className="cards-wrapper">
        {Services?.map((item) => {
          return (
            <Card
              title={item?.title}
              description={item?.description}
              url={item?.url}
              slug={item?.slug}
            />
          );
        })}
      </div>
    </div>
  );
};
