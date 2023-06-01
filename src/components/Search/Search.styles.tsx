import styled from "styled-components"; // Import styled-components library

export const SearchStyled = styled.div`
  // Define a styled component called SearchStyled
  display: flex; // Set the display to flex
  align-items: center; // Set the align items to center
  flex-direction: column; // Set the flex direction to column
  background-color: #ffffff; // Set the background color to #ffffff
  padding: 10px; // Set the padding to 10px
  justify-content: space-between; // Set the justify content to space-between
  border-radius: 10px; // Set the border radius to 10px

  form {
    // Style the form
    display: flex; // Set the display to flex
    align-items: center; // Set the align items to center
    border-radius: 10px; // Set the border radius to 10px
    padding: 5px; // Set the padding to 5px

    input {
      // Style the input
      background-color: transparent; // Set the background color to transparent
      border: none; // Set the border to none
      outline: none; // Set the outline to none
    }
  }

  .searchResults {
    // Style the searchResults
    display: flex; // Set the display to flex
    flex-direction: column; // Set the flex direction to column
    gap: 10px; // Set the gap between child elements to 10px
    width: 100%; // Set the width to 100%
    height: 100%; // Set the height to 100%
    border-top: 1px solid #e0e0e0; // Set the border top to 1px solid #e0e0e0
    .userChat {
      // Style the userChat
      display: flex; // Set the display to flex
      align-items: center; // Set the align items to center
      border-radius: 10px; // Set the border radius to 10px
      color: black; // Set the color to black
      background-color: #ffffff; // Set the background color to #ffffff
      width: 100%; // Set the width to 100%
      gap: 10px; // Set the gap between child elements to 10px
      padding: 10px; // Set the padding to 10px
      img {
        // Style the img
        width: 50px; // Set the width to 50px
        height: 50px; // Set the height to 50px
        border-radius: 50%; // Set the border radius to 50%
      }
      :hover {
        // If the user hovers over the userChat, apply the following styles
        cursor: pointer; // Set the cursor to pointer
        filter: brightness(0.9); // Set the filter to brightness(0.9)
      }
    }
  }
`;
