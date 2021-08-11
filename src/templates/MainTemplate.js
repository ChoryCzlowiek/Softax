import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import GlobalStyle from "../theme/GlobalStyle";
import { darkTheme, lightTheme } from "../theme/mainTheme";

const MainTemplate = ({ children, isLightMode }) => {
  return (
    <>
      <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = ({ isLightMode }) => ({ isLightMode });

export default connect(mapStateToProps, null)(MainTemplate);
