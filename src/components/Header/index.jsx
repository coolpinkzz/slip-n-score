/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { navLinks } from "../../utils/constant";
import { navigate } from "gatsby";

const navStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
  maxWidth: "container",
  margin: "auto",
  padding: "10px 0",
  color: "text",
};

const bookNowBtn = {
  variant: "buttons.primary",
  fontSize: 20,
};

const listLink = {
  listStyle: "none",
};

const listAnchor = {
  color: "text",
  textDecoration: "none",
  ":hover": {
    textShadow: "1px 1px 2px black, 0 0 7px #FAF9F6, 0 0 5px darkblue",
  },
};

export const Header = () => {
  return (
    <>
      <nav sx={navStyle} className="nav-wrapper">
        <img
          onClick={() => navigate("/")}
          className="logo-img"
          src={"../../logo.png"}
          alt="slip n score"
        />
        <div className="nav-menu">
          <ul className="link-container">
            {navLinks?.map((item) => {
              return (
                <li sx={listLink}>
                  <a sx={listAnchor} href={item?.url}>
                    {item?.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <button sx={bookNowBtn}>Book Now</button>
        </div>
      </nav>
    </>
  );
};
