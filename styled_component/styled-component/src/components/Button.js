import React from "react";
import styled from "styled-components";

import { DefaultButton, SpecialDefaultButton } from "./public/AllButtons";

const SpecialButton = styled.button`
  position: absolute;
  top: 7rem;
  border: 1px solid red;
  background-color: red;
  color: white;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 5px;

  transition: all 0.5s;

  &:hover {
    background-color: white;
    color: red;
  }
`;

const ButtonTest = () => {
  return (
    <div>
      <DefaultButton>Press</DefaultButton>
      <SpecialButton>Press</SpecialButton>
      <SpecialDefaultButton>Press</SpecialDefaultButton>
    </div>
  );
};

export default ButtonTest;
