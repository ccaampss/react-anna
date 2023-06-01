import React, { useContext } from "react"; // Import React and useContext hook
import { ChatContext } from "../../../context/ChatContext"; // Import the ChatContext
import { AuthContext } from "../../../context/AuthContext"; // Import the AuthContext
import { UserChatStyled } from "./UserChat.styles"; // Import the UserChatStyled component
import { Avatar, Badge } from "@mui/material"; // Import the Avatar and Badge components
import { truncateText } from "../../../utils"; // Import the truncateText function
import { TbCrown } from "react-icons/tb"; // Import the Crown icon
import styled from "styled-components"; // Import styled-components library

export const CrownIconInYourChatStyled = styled.div` // Define a styled component called CrownIconInYourChatStyled
  display: flex; // Set the display to flex
  align-items: center; // Set the align items to center
  justify-content: center; // Set the justify content to center
  background-color: #fdec66; // Set the background color to #fdec66
  border-radius: 50%; // Set the border radius to 50%
  padding: 1px; // Set the padding to 1px
  color: #41381a; // Set the color to #41381a
`;
export const CrownIconInYourChat = () => { // Define the CrownIconInYourChat component
  return ( // Return the CrownIconInYourChatStyled component with the TbCrown icon
    <CrownIconInYourChatStyled> 
      <TbCrown /> 
    </CrownIconInYourChatStyled>
  );
};

const UserChat = ({ chat }: any) => { // Define the UserChat component
  const { data: openChatData } = useContext(ChatContext); // Destructure the data from the ChatContext
  const { currentUser } = useContext(AuthContext); // Destructure the currentUser from the AuthContext

  const { dispatch } = useContext(ChatContext); // Destructure the dispatch from the ChatContext

  const handleSelect = (u: any) => { // Define the handleSelect function
    dispatch({ type: "CHANGE_USER", payload: u }); // Dispatch the CHANGE_USER action with the user data
  };

  const isThisChatYou = chat[1].userInfo.uid === currentUser.uid ?? false; // Define the isThisChatYou variable

  const isThisUserOpened = 
    chat[1].userInfo.uid === openChatData.user.uid ?? false; // Define the isThisUserOpened variable

  return ( // Return the UserChatStyled component with the user data
    <UserChatStyled 
      isThisUserOpened={isThisUserOpened} 
      onClick={() => handleSelect(chat[1].userInfo)} 
    >
      <Badge 
        overlap="circular" 
        anchorOrigin={{ vertical: "top", horizontal: "right" }} 
        badgeContent={isThisChatYou && <CrownIconInYourChat />} 
      >
        <Avatar 
          alt={currentUser.displayName[0]}
          src={chat[1].userInfo.photoURL}
        />
      </Badge>

      <div className="info">
        <span>{chat[1].userInfo.displayName}</span>
        <span className="lastMessage">
          {truncateText(chat[1].lastMessage?.text || "", 15)}
        </span>
      </div>
    </UserChatStyled> 
  );
};

export default UserChat; // Export the UserChat component as the default export
