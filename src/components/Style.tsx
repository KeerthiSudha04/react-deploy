import React from 'react';
import styled from 'styled-components';

// Define a styled component for the entire component
const StyledComponentWrapper = styled.div`
  background-color: lightcoral;
  padding: 20px;
`;

const StyledComponent = () => {
  return (
    <StyledComponentWrapper>
      <h2>This is a Styled Component</h2>
      <p>This component has styling applied to the entire wrapper.</p>
      
    </StyledComponentWrapper>
  );
};

export default StyledComponent;
