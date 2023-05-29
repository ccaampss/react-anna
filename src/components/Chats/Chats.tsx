import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { ChatsStyled } from "./Chats.styles";
import UserChat from "./userChat/UserChat";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() as any);
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <ChatsStyled>
      {chats &&
        Object.entries(chats as any)
          ?.sort((a: any, b: any) => b[1].date - a[1].date)
          .map((chat) => <UserChat chat={chat} key={chat[0]} />)}
    </ChatsStyled>
  );
};

export default Chats;
