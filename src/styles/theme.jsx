import React from "react";
import PropTypes from "prop-types";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { ThemeProvider } from "styled-components";
const Theme = ({ lightOn, children }) => (
  <ThemeProvider theme={lightOn ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  lightOn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Theme;
