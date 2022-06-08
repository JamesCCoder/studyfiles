import React from "react";
import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  border: 1px solid blue;
  background-color: blue;
  color: white;
  padding: 0.5rem 0.75rem;
`;

const InputAndButton = () => {
  return (
    <div>
      <StyledButton>Press</StyledButton>
    </div>
  );
};

export default InputAndButton;
