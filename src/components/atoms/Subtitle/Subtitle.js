import styled from "styled-components";

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.xl};
`;

export default Subtitle;
