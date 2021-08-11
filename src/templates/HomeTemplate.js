import React from "react";
import PageTemplate from "../templates/PageTemplate";
import Header from "../components/organisms/Header/Header";

const HomeTemplate = ({ isFormVisible, goToHome }) => (
  <PageTemplate goToHome={goToHome}>
    <Header isFormVisible={isFormVisible} />
  </PageTemplate>
);

export default HomeTemplate;
