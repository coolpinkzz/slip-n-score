/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import "./index.css";

export const Heading = ({ children, className = "" }) => {
  return (
    <h1
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
        margin: 20,
      }}
      className={`${className} header-tag`}
    >
      {children}
    </h1>
  );
};
