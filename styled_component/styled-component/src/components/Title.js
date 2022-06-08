import React from "react";
import styled, { css } from "styled-components";

const TitleStyle = styled.div`
  width: 40%;
  margin: 40px auto;
`;

const TitleContent = styled.h2`
  font-size: 2rem;
  color: ${({ special }) => (special ? "red" : "blue")};
  ${({ large }) =>
    large
      ? css`
          font-size: 40px;
        `
      : css`
          font-size: 10px;
        `}
`;

const Title = () => {
  return (
    <TitleStyle>
      <TitleContent special large>
        Let me have a try
      </TitleContent>
      <TitleContent>Looks great</TitleContent>
    </TitleStyle>
  );
};

export default Title;
