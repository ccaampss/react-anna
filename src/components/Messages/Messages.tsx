import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from "../Message/Message";
import { MessagesStyled } from "./Messages.styles";
import { IMessage } from "../../types";
import { Loading } from "../Loading/Loading";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      setLoading(false);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <MessagesStyled>
      {loading ? (
        <Loading />
      ) : (
        messages.map((m: IMessage) => <Message message={m} key={m.id} />)
      )}
    </MessagesStyled>
  );
};

export default Messages;
