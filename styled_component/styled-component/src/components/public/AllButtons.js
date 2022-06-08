import styled from "styled-components";

export const DefaultButton = styled.button`
  position: absolute;
  top: 4rem;
  border: 1px solid pink;
  color: white;
  background-color: pink;
  padding: 0.5rem 0.75rem;
`;

export const SpecialDefaultButton = styled(DefaultButton)`
  font-size: 2rem;
  top: 10rem;
`;
