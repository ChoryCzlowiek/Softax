import styled from "styled-components";

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.xl};
  font-family: ${({ theme }) => theme.titleFont};
  letter-spacing: 1px;
`;

export default Subtitle;
