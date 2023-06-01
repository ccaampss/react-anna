import React from "react"; // Import React
import Messages from "./Messages/Messages"; // Import the Messages component
import Input from "./Input/Input"; // Import the Input component
import styled from "styled-components"; // Import styled-components library

export const ChatStyled = styled.div` // Define a styled component called ChatStyled
  display: flex; // Set the display to flex
  flex-direction: column; // Set the flex direction to column
  min-width: 400px; // Set the min width to 400px
  width: 100%; // Set the width to 100%
  border-radius: 10px; // Set the border radius to 10px
  overflow: hidden; // Set the overflow to hidden
`;

const Chat = () => { // Define the Chat component
  return ( // Return the ChatStyled component with the Messages and Input components
    <ChatStyled> 
      <Messages /> 
      <Input />
    </ChatStyled>
  );
};

export default Chat; // Export the Chat component
