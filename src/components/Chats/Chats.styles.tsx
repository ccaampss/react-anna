import styled from "styled-components";

// Define a styled component called ChatsStyled
export const ChatsStyled = styled.div`
  background-color: white; // Set the background color to white
  display: flex; // Set the display to flex
  flex-direction: column; // Set the flex direction to column
  gap: 10px; // Set the gap between child elements to 10px
  padding: 10px; // Set the padding to 10px
  border-radius: 10px; // Set the border radius to 10px
  overflow-y: scroll; // Enable vertical scrolling
  height: 100%; // Set the height to 100%
  ::-webkit-scrollbar { // Style the scrollbar
    width: 5px; // Set the width of the scrollbar to 5px
  }
`;
