import styled from "styled-components";

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0.5rem 0;
`;

export default Paragraph;
