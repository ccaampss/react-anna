import React from "react";

import Messages from "./Messages/Messages";
import Input from "./Input";
import styled from "styled-components";

export const ChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
`;

const Chat = () => {
  return (
    <ChatStyled>
      <Messages />
      <Input />
    </ChatStyled>
  );
};

export default Chat;
