/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
//import "./index.css";

export const Heading = ({ children }) => {
  return (
    <h1 sx={{ display: "flex", justifyContent: "center", alignItem: "center" }}>
      {children}
    </h1>
  );
};
