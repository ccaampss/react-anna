import styled from "styled-components"; // Import styled-components library

export const UserButtonStyled = styled.button` // Define a styled component called UserButtonStyled
  display: flex; // Set the display to flex
  flex-direction: row; // Set the flex direction to row
  gap: 10px; // Set the gap between child elements to 10px
  align-items: center; // Set the align items to center
  padding: 5px 10px; // Set the padding to 5px 10px
  border-radius: 5px; // Set the border radius to 5px
  background-color: #d7b7aa; // Set the background color to #d7b7aa
  border: none; // Set the border to none
  :hover { // If the user hovers over the button, apply the following styles
    cursor: pointer; // Set the cursor to pointer
    filter: brightness(0.9); // Set the filter to brightness(0.9)
  }

  img { // Style the image
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
