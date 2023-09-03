/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";

const PriceContainer = {
  width: "container",
};

export const Price = () => {
  return (
    <div sx={{ position: "relative" }}>
      <img className="bubble" src={"../../bubble.png"} width={200} />
      <h1 className="price-heading"> Exclusive Grand Opening Offers!</h1>
      <div sx={PriceContainer} className="price-container">
        <div sx={{ flex: 1 }}>
          <h1 className="discount-info">
            Get ready for non-stop fun with a{" "}
            <span sx={{ color: "yellow" }}>FLAT 40% discount</span> on each slot
          </h1>
        </div>
        <div
          sx={{
            variant: "buttons.warning",
          }}
          className="rate-card"
        >
          <div>
            <h2>Weekdays (Mon - Fri)</h2>
            <div className="price-wrap">
              <h3 sx={{ textDecoration: "line-through", margin: "0px" }}>
                1999 Rs
              </h3>
              <h3 sx={{ color: "yellow", fontSize: "30px", margin: "10px" }}>
                1199 Rs (55 min)
              </h3>
            </div>
          </div>
          <div>
            <h2>Weekends (Sat - Sun)</h2>
            <div className="price-wrap">
              <h3 sx={{ textDecoration: "line-through", margin: "0px" }}>
                2499 Rs
              </h3>
              <h3 sx={{ color: "yellow", fontSize: "30px", margin: "10px" }}>
                1499 Rs (55 min)
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
