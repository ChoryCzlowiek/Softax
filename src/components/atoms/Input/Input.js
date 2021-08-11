import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.3rem;
  background-color: transparent;
  color: ${({ theme }) => theme.textHoverColor};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.textColor};

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.textHoverColor};
  }
`;

export default Input;
