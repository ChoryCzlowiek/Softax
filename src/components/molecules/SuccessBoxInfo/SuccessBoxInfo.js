import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import Title from "../../atoms/Title/Title";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Button from "../../atoms/Button/Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: ${({ theme }) => theme.elBgcColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledButtonIcon = styled(ButtonIcon)`
  margin: 2rem 0;
  cursor: auto;
`;

class SuccessBoxInfo extends Component {
  state = {
    redirect: false,
  };

  redirectToHome() {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <StyledWrapper>
        <Title>Wiadomość została wysłana</Title>
        <StyledButtonIcon big icon={faCheckCircle} />
        <Button onClick={() => this.redirectToHome()}>Strona główna</Button>
      </StyledWrapper>
    );
  }
}

export default SuccessBoxInfo;
