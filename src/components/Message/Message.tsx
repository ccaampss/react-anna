import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { Avatar } from "@mui/material";
import { MessageStyled } from "./Message.styles";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef<any>(null);

  const date = new Date(message.date?.seconds * 1000);
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <MessageStyled
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <Avatar
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
        >
          {data.user.displayName[0]}
        </Avatar>

        <span className="messageTime">{time}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </MessageStyled>
  );
};

export default Message;
