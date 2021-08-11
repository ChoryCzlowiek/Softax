import React from "react";
import FormTemplate from "../templates/FormTemplate";
import FormBox from "../components/molecules/FormBox/FormBox";

const Form = ({ branch, goToHome }) => (
  <FormTemplate goToHome={goToHome}>
    <FormBox branch={branch} />
  </FormTemplate>
);

export default Form;
