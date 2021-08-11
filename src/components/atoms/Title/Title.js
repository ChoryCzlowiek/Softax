import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.textHoverColor};
  font-size: ${({ theme }) => theme.xxl};
`;

export default Title;
