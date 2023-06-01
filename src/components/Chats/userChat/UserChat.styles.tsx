import styled from "styled-components"; // Import styled-components library

interface UserChatStyledProps { // Define the interface for the UserChatStyled component props
  isThisUserOpened: boolean; // A boolean to indicate if the user chat is opened
}
export const UserChatStyled = styled.div<UserChatStyledProps>` // Define a styled component called UserChatStyled
  display: flex; // Set the display to flex
  align-items: center; // Set the align items to center
  border-radius: 5px; // Set the border radius to 5px
  color: black; // Set the color to black
  gap: 10px; // Set the gap between child elements to 10px
  background-color: #ffffff;  // Set the background color to white
  padding: 10px; // Set the padding to 10px
  img {
    width: 50px; // Set the width to 50px
    height: 50px; // Set the height to 50px
    border-radius: 50%; // Set the border radius to 50%
  }

  .info {
    display: flex; // Set the display to flex
    flex-direction: column; // Set the flex direction to column
    gap: 5px; // Set the gap between child elements to 5px

    .lastMessage {
      font-size: 0.8em; // Set the font size to 0.8em
      opacity: 0.7; // Set the opacity to 0.7
    }
  }
  :hover {
    cursor: pointer; // Set the cursor to pointer
    filter: brightness(0.9); // Set the brightness to 0.9
  }
  ${({ isThisUserOpened }) => // If the isThisUserOpened prop is true, apply the following styles
    isThisUserOpened &&
    `
    background-color: #ebebeb; 
  `}
`;
