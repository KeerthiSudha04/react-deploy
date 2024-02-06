import React from 'react';
import styled from 'styled-components';

// Define a styled component for the entire component
const StyledComponentWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
`;

const StyledComponent: React.FC = () => {
  return (
    <StyledComponentWrapper>
      <h2>This is a Styled Component</h2>
      <p>This component has styling applied to the entire wrapper.</p>
      <button>Click Me</button>
    </StyledComponentWrapper>
  );
};

export default StyledComponent;
