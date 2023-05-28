import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  const { data: openChatData } = useContext(ChatContext);

  return (
    <div className="chats">
      {chats &&
        Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => {
            return (
              <div
                className={`userChat ${
                  chat[1].userInfo.uid === currentUser.uid && "thisChatIsYou"
                } ${
                  chat[1].userInfo.uid === openChatData.user.uid &&
                  "youAreTalkiingWithThisChat"
                }`}
                key={chat[0]}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
                {chat[1].userInfo.photoURL && (
                  <img src={chat[1].userInfo.photoURL} alt="" />
                )}
                <div className="userChatInfo">
                  <span>{chat[1].userInfo.displayName}</span>
                  <span className="lastMessage">
                    {chat[1].lastMessage?.text}
                  </span>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Chats;
