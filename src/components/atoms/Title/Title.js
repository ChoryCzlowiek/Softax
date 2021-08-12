import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.textHoverColor};
  font-size: ${({ theme }) => theme.xxl};
  font-family: ${({ theme }) => theme.titleFont};
  letter-spacing: 1px;
`;

export default Title;
