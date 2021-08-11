import React from "react";
import PropTypes from "prop-types";
import PageTemplate from "./PageTemplate";
import FormContainer from "../components/organisms/FormContainer/FormContainer";

const FormTemplate = ({ children, goToHome }) => (
  <PageTemplate goToHome={goToHome}>
    <FormContainer>{children}</FormContainer>
  </PageTemplate>
);

FormTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormTemplate;
