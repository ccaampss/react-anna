import React from "react";

import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import styled from "styled-components";

export const ChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  width: 100%;
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
