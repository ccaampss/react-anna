import React, { useContext } from "react";
import { ChatContext } from "../../../../context/ChatContext";
import { AuthContext } from "../../../../context/AuthContext";
import { UserChatStyled } from "./UserChat.styles";
import { Avatar } from "@mui/material";

const UserChat = ({ chat }: any) => {
  const { data: openChatData } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const { dispatch } = useContext(ChatContext);

  const handleSelect = (u: any) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const isThisChatYou = chat[1].userInfo.uid === currentUser.uid;

  const isThisUserOpened = chat[1].userInfo.uid === openChatData.user.uid;
  
  
  return (
    <UserChatStyled onClick={() => handleSelect(chat[1].userInfo)}>
        
        
        
      <Avatar src={chat[1].userInfo.photoURL}>
        {currentUser.displayName[0]}
      </Avatar>

      <div className="info">
        <span>{chat[1].userInfo.displayName}</span>
        <span className="lastMessage">{chat[1].lastMessage?.text}</span>
      </div>
    </UserChatStyled>
  );
};

export default UserChat;
