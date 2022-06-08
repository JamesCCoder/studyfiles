import React from "react";
import styled from "styled-components";

const Combination = styled.div`
  .content {
    color: var(--primary);
  }

  p {
    color: blue;
  }
`;

const ComplexComponent = () => {
  return (
    <Combination>
      <h1 className="content">1233454354fsdfdfdsdfdsfdsfdfds</h1>
      <p>323432423432423423423423432432434</p>
    </Combination>
  );
};

export default ComplexComponent;
