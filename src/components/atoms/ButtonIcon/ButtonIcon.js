import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonIcon = styled(FontAwesomeIcon)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xxxl : theme.fontSize.l};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hoverTextColor};
  }
`;

export default ButtonIcon;
