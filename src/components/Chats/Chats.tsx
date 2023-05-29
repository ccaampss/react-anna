import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { ChatsStyled } from "./Chats.styles";
import UserChat from "./userChat/UserChat";
import { Loading } from "../Loading/Loading";
const Chats = () => {
  const [chats, setChats] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getChats = () => {
      setLoading(true);
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() as any);
        setLoading(false);
      });

      return () => {
        unsub();
        setLoading(false);
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return loading ? (
    <ChatsStyled>
      <Loading />
    </ChatsStyled>
  ) : (
    chats && (
      <ChatsStyled>
        {Object.entries(chats as any)
          ?.sort((a: any, b: any) => b[1].date - a[1].date)
          .map((chat) => (
            <UserChat chat={chat} key={chat[0]} />
          ))}
      </ChatsStyled>
    )
  );
};

export default Chats;
