import styled from "styled-components"; // Import styled-components library

export const MessageStyled = styled.div` // Define a styled component called MessageStyled
  display: flex; // Set the display to flex
  gap: 20px; // Set the gap between child elements to 20px
  margin-bottom: 20px; // Set the margin bottom to 20px

  /* the time where your message is sent is shown */
  .messageInfo {  
    display: flex; // Set the display to flex
    flex-direction: column; // Set the flex direction to column
    justify-content: center; // Set the justify content to center
    align-items: center; // Set the align items to center
    gap: 3px; // Set the gap between child elements to 3px

    img { // Style the image
      width: 40px; // Set the width to 40px
      height: 40px; // Set the height to 40px
      border-radius: 50%; // Set the border radius to 50%
      object-fit: cover; // Set the object fit to cover
    }
    .messageTime { // Style the messageTime
      font-size: 0.7em; // Set the font size to 0.7em
    }
  }

  .messageContent { // Style the messageContent
    max-width: 80%; // Set the max width to 80%
    display: flex; // Set the display to flex
    flex-direction: column; // Set the flex direction to column
    gap: 10px; // Set the gap between child elements to 10px

    p { // Style the p
      background-color: #d3d3d3; // Set the background color to #d3d3d3
      padding: 10px 20px; // Set the padding to 10px 20px
      border-radius: 0px 10px 10px 10px; // Set the border radius to 0px 10px 10px 10px
      max-width: max-content; // Set the max width to max-content
    }

    img {   // Style the image
      width: 100%; // Set the width to 100%
      height: 100%; // Set the height to 100%
    }
  }
  &.owner { // If the message is from the owner, apply the following styles
    flex-direction: row-reverse; // Set the flex direction to row-reverse

    .messageContent { // Style the messageContent
      align-items: flex-end; // Set the align items to flex-end

      p { // Style the p
        background-color: #d7b7aa; // Set the background color to #d7b7aa
        color: #000000; // Set the color to #000000
        border-radius: 10px 0px 10px 10px; // Set the border radius to 10px 0px 10px 10px
      }
    }
  }
`;
