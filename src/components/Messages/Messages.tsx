import { doc, onSnapshot } from "firebase/firestore"; // Import the doc and onSnapshot functions from the firebase/firestore module
import React, { useContext, useEffect, useState } from "react"; // Import React and useContext, useEffect, and useState hooks
import { ChatContext } from "../../context/ChatContext"; // Import the ChatContext
import { db } from "../../firebase"; // Import the db object from the firebase module
import Message from "../Message/Message"; // Import the Message component
import { MessagesStyled } from "./Messages.styles"; // Import the MessagesStyled component
import { IMessage } from "../../types"; // Import the IMessage interface
import { Loading } from "../Loading/Loading"; // Import the Loading component

const Messages = () => { // Define the Messages component
  const [messages, setMessages] = useState([]); // Define the messages state variable
  const { data } = useContext(ChatContext); // Destructure the data from the ChatContext
  const [loading, setLoading] = useState(false);  // Define the loading state variable

  useEffect(() => { // Define the useEffect hook
    setLoading(true); // Set the loading state variable to true
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => { // Subscribe to the chats collection
      doc.exists() && setMessages(doc.data().messages); // If the doc exists, set the messages state variable to the messages array
      setLoading(false); // Set the loading state variable to false
    });

    return () => { // Return the unSub function
      unSub(); // Unsubscribe from the chats collection
    };
  }, [data.chatId]); // Run the useEffect hook when the data.chatId changes

  return ( // Return the MessagesStyled component with the messages data
    <MessagesStyled> 
      {loading ? ( // If the loading state variable is true, return the Loading component
        <Loading /> 
      ) : (
        messages.map((m: IMessage) => <Message message={m} key={m.id} />) // Map over the messages array and return the Message component with the message data
      )}
    </MessagesStyled>
  );
};

export default Messages; // Export the Messages component
