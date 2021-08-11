import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/molecules/Navbar/Navbar";

const PageTemplate = ({ children, goToHome }) => (
  <>
    <Navbar goToHome={goToHome}></Navbar>
    {children}
  </>
);

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
