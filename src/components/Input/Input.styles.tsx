import styled from "styled-components"; // Import styled-components library

export const InputStyled = styled.div` // Define a styled component called InputStyled
  background-color: white; // Set the background color to white
  padding: 10px; // Set the padding to 10px
  display: flex; // Set the display to flex
  align-items: center; // Set the align items to center
  justify-content: space-between; // Set the justify content to space-between
  gap: 10px; // Set the gap between child elements to 10px


  input {
    width: 100%; // Set the width to 100%
    border: none; // Set the border to none
    outline: none; // Set the outline to none
    color: rgb(0, 0, 0); // Set the color to rgb(0, 0, 0)
    cursor: pointer; // Set the cursor to pointer

    &::placeholder {
      color: lightgrey; // Set the color to lightgrey
    }
  }
  .send {
    display: flex; // Set the display to flex
    align-items: center; // Set the align items to center
    gap: 10px; // Set the gap between child elements to 10px
  }

  .icon {
    padding: 5px; // Set the padding to 5px
    background-color: white; // Set the background color to white
    border-radius: 5px; // Set the border radius to 5px
    :hover {
      cursor: pointer; // Set the cursor to pointer
      filter: brightness(0.9); // Set the filter to brightness(0.9)
    }
  }
`;
