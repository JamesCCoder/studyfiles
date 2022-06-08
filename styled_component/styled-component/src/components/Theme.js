import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const BaseTheme = {
  color: "black",
  background: "white",
};

const SpecialTheme = {
  color: "yellow",
  background: "purple",
};

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
`;

const StyledButton = styled.button`
  border: 1px solid blue;
  background-color: blue;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
`;

const Theme = () => {
  const [Frame, setFrame] = useState(true);
  const toggleHandler = () => {
    setFrame(!Frame);
  };
  return (
    <ThemeProvider theme={Frame ? BaseTheme : SpecialTheme}>
      <Container as="a" href="www.google.com">
        ThemeThemeThemeThemeThemeThemeThemeThemeThemeTheme
      </Container>
      <StyledButton onClick={toggleHandler} as="a" href="#">
        toggle
      </StyledButton>
    </ThemeProvider>
  );
};

export default Theme;
