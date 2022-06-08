import React from "react";
import styled from "styled-components";

import { colors } from "../utils";

const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: green;
  margin: auto;
  border: 1px solid blue;
`;

const Content = styled.div`
  color: ${colors.secondary};
  position: absolute;
  border: 1px solid red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AnotherHeader = () => {
  return (
    <Frame>
      <Content>123</Content>
    </Frame>
  );
};

export default AnotherHeader;
