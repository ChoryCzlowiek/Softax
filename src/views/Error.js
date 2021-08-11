import React from "react";
import styled from "styled-components";
import Title from "../components/atoms/Title/Title";

const StyledTitle = styled(Title)`
  text-align: center;
  line-height: 100vh;
`;

const Error = () => (
  <>
    <StyledTitle>Błąd 404</StyledTitle>
  </>
);

export default Error;
