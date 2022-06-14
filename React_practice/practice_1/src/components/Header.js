import React from "react";
import styled from "styled-components";

let StyledHeader = styled.header`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <p>This is a header</p>
    </StyledHeader>
  );
};

export default Header;
