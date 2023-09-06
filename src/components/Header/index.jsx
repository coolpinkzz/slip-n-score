/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";
import { navLinks } from "../../utils/constant";
import { navigate } from "gatsby";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
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
          <div className={showMenu ? "show-menu" : "hide-menu"}>
            <RxCross2 onClick={closeMenu} className="cross-icon" />
            <nav>
              <ul>
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
            </nav>
          </div>
          <AiOutlineMenu
            onClick={toggleMenu}
            className="menu-icon"
            fontSize="20"
          />
        </div>
      </nav>
    </>
  );
};
