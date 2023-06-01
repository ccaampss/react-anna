import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react"; // Import React and useContext, useEffect, and useState hooks
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext
import { db } from "../../firebase"; // Import the db object from the firebase module
import { ChatsStyled } from "./Chats.styles"; // Import the ChatsStyled component
import UserChat from "./userChat/UserChat"; // Import the UserChat component
import { Loading } from "../Loading/Loading"; // Import the Loading component
const Chats = () => {
  const [chats, setChats] = useState(null); // Define the chats state variable

  const { currentUser } = useContext(AuthContext); // Destructure the currentUser from the AuthContext
  const [loading, setLoading] = useState(false); // Define the loading state variable

  useEffect(() => {
    // Define the useEffect hook
    const getChats = () => {
      // Define the getChats function
      setLoading(true); // Set the loading state variable to true
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        // Subscribe to the userChats collection
        setChats(doc.data() as any); // Set the chats state variable to the userChats collection data
        setLoading(false); // Set the loading state variable to false
      });

      return () => {
        // Return the unsub function
        unsub(); // Unsubscribe from the userChats collection
        setLoading(false); // Set the loading state variable to false
      };
    };

    currentUser.uid && getChats(); // If the currentUser.uid exists, call the getChats function
  }, [currentUser.uid]); // Run the useEffect hook when the currentUser.uid changes

  return loading ? ( // If the loading state variable is true, return the Loading component
    <ChatsStyled>
      <Loading />
    </ChatsStyled>
  ) : (
    chats && ( // If the chats state variable exists, return the ChatsStyled component with the chats data
      <ChatsStyled>
        {Object.entries(chats as any) // Convert the chats object to an array
          ?.sort((a: any, b: any) => b[1].date - a[1].date) // Sort the chats array by date
          .map(
            (
              chat // Map over the chats array
            ) => (
              <UserChat chat={chat} key={chat[0]} /> // Return the UserChat component with the chat data
            )
          )}
      </ChatsStyled>
    )
  );
};

export default Chats;
