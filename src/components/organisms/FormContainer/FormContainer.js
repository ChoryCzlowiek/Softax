import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import formImg from "../../../assets/images/formImg.jpg";

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  min-height: 70%;
  background-color: ${({ theme }) => theme.elBgcColor};
  box-shadow: 0 0 2px ${({ theme }) => theme.elBgcColor};
  display: flex;
`;

const StyledImgWrapper = styled.div`
  flex-basis: 50%;
  background-image: url(${formImg});
  background-size: cover;
`;

const StyledFormWrapper = styled.div`
  flex-basis: 50%;
  padding: 4rem 2rem;
`;

const FormContainer = ({ children }) => (
  <StyledWrapper>
    <StyledImgWrapper />
    <StyledFormWrapper>{children}</StyledFormWrapper>
  </StyledWrapper>
);

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContainer;
