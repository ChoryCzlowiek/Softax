import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { changeMode } from "../../../actions/index";
import {
  faHome,
  faUserSecret,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import Subtitle from "../../atoms/Subtitle/Subtitle";

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.elBgcColor};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
`;

const StyledSubtitle = styled(Subtitle)`
  margin: 0 1rem;
`;

class Navbar extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { date } = this.state;
    const { changeMode, goToHome } = this.props;

    return (
      <StyledWrapper>
        <NavLink to="/Softax">
          <ButtonIcon icon={faHome} onClick={goToHome} />
        </NavLink>
        <NavLink to="/Softax/policy">
          <ButtonIcon icon={faUserSecret} />
        </NavLink>
        <ButtonIcon icon={faMoon} onClick={changeMode} />
        <StyledSubtitle>{date.toLocaleDateString()}</StyledSubtitle>
        <StyledSubtitle>{date.toLocaleTimeString()}</StyledSubtitle>
      </StyledWrapper>
    );
  }
}

export default connect(null, { changeMode })(Navbar);
