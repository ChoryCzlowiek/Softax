import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.xll};
  font-family: ${({ theme }) => theme.titleFont};
  letter-spacing: 1px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.green};
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
