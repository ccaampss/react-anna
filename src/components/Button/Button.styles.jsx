import styled from "styled-components";

// Define a styled component called ButtonStyled
export const ButtonStyled = styled.button`
  min-width: 60px; // Set the minimum width of the button to 60px
  padding: 10px 20px; // Set the padding of the button to 10px on top and bottom, and 20px on left and right
  border: none; // Remove the border from the button
  padding: 10px; // Set the padding of the button to 10px (overrides the previous padding)
  color: white; // Set the text color of the button to white
  background-color: #d7b7aa; // Set the background color of the button to a specific shade of pink
  cursor: pointer; // Change the cursor to a pointer when hovering over the button
  border-radius: 5px; // Set the border radius of the button to 5px, rounding the corners

  :hover { // Styles to apply when the button is hovered
    filter: brightness(0.9); // Reduce the brightness of the button to 90%
  }
`;
