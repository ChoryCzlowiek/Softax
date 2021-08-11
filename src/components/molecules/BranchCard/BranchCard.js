import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Button from "../../atoms/Button/Button";

const StyledImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  transition: 0.5s;
`;

const StyledInnerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.elBgcColorOpc};
  transform: translateY(50%);
  transition: 0.5s;
`;

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  transition: 0.5s;
`;

const StyledWrapper = styled.div`
  margin: 0 3rem;
  height: 60vh;
  width: 18%;
  overflow: hidden;
  position: relative;

  &:hover {
    ${StyledImgWrapper} {
      transform: scale(1.25);
    }

    ${StyledTextWrapper} {
      top: -100%;
    }

    ${StyledInnerWrapper} {
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;

const BranchCard = ({ img, branch, country, isFormVisible }) => (
  <StyledWrapper>
    <StyledImgWrapper img={img} />
    <StyledTextWrapper>
      <Title>{branch}</Title>
      <Subtitle>{country}</Subtitle>
    </StyledTextWrapper>
    <StyledInnerWrapper>
      <Subtitle>Wyślij zapytanie</Subtitle>
      <StyledButton onClick={() => isFormVisible(branch)}>Przejdź</StyledButton>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default BranchCard;
