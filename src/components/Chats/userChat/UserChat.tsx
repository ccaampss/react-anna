import React, { useContext } from "react";
import { ChatContext } from "../../../context/ChatContext";
import { AuthContext } from "../../../context/AuthContext";
import { UserChatStyled } from "./UserChat.styles";
import { Avatar, Badge } from "@mui/material";
import { truncateText } from "../../../utils";
import { TbCrown } from "react-icons/tb";
import styled from "styled-components";

export const CrownIconInYourChatStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdec66;
  border-radius: 50%;
  padding: 1px;
  color: #41381a;
`;
export const CrownIconInYourChat = () => {
  return (
    <CrownIconInYourChatStyled>
      <TbCrown />
    </CrownIconInYourChatStyled>
  );
};

const UserChat = ({ chat }: any) => {
  const { data: openChatData } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const { dispatch } = useContext(ChatContext);

  const handleSelect = (u: any) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  const isThisChatYou = chat[1].userInfo.uid === currentUser.uid ?? false;

  const isThisUserOpened =
    chat[1].userInfo.uid === openChatData.user.uid ?? false;

  return (
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
          {truncateText(chat[1].lastMessage?.text, 15)}
        </span>
      </div>
    </UserChatStyled>
  );
};

export default UserChat;
