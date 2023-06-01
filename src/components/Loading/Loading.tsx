import { Ring } from "@uiball/loaders"; //  @uiball/loaders is a package from npm
import React from "react"; // Import React
import styled from "styled-components"; // Import styled-components library

export const LoadingStyled = styled.div` // Define a styled component called LoadingStyled
  display: flex; // Set the display to flex
  justify-content: center; // Set the justify content to center
  align-items: center; // Set the align items to center
  height: 100%; // Set the height to 100%
`;

export const Loading = () => { // Define a Loading component
  return ( // Return the following
    <LoadingStyled>   
      <Ring />
    </LoadingStyled>
  );
};
