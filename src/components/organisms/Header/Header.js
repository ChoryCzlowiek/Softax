import React from "react";
import styled from "styled-components";
import BranchCard from "../../molecules/BranchCard/BranchCard";
import bgcImg from "../../../assets/images/background.jpg";
import warsaw from "../../../assets/images/warsaw.jpg";
import cracov from "../../../assets/images/cracov.jpg";
import berlin from "../../../assets/images/berlin.jpg";

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${bgcImg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ isFormVisible }) => (
  <StyledWrapper>
    <BranchCard
      branch="XYZ Warszawa"
      country="Poland"
      img={warsaw}
      isFormVisible={isFormVisible}
    ></BranchCard>
    <BranchCard
      branch="ABC Kraków"
      country="Poland"
      img={cracov}
      isFormVisible={isFormVisible}
    ></BranchCard>
    <BranchCard
      branch="RNQ Berlin"
      country="Germany"
      img={berlin}
      isFormVisible={isFormVisible}
    ></BranchCard>
  </StyledWrapper>
);

export default Header;
