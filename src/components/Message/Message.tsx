import React, { useContext, useEffect, useRef } from "react"; // Import React and useContext, useEffect, and useRef hooks
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext
import { ChatContext } from "../../context/ChatContext"; // Import the ChatContext
import { Avatar } from "@mui/material"; // Import the Avatar component
import { MessageStyled } from "./Message.styles"; // Import the MessageStyled component

const Message = ({ message }) => { // Define the Message component
  const { currentUser } = useContext(AuthContext); // Destructure the currentUser from the AuthContext
  const { data } = useContext(ChatContext); // Destructure the data from the ChatContext

  const ref = useRef<any>(null); // Define the ref variable

  const date = new Date(message.date?.seconds * 1000); // Define the date variable
  const time = date.toLocaleTimeString("en-US", { // Define the time variable
    hour: "numeric", // Set the hour to numeric
    minute: "numeric", // Set the minute to numeric
    hour12: false, // Set the hour12 to false
  });

  useEffect(() => { // Define the useEffect hook
    ref.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the ref
  }, [message]); // Run the useEffect hook when the message changes

  return ( // Return the MessageStyled component with the message data
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

export default Message; // Export the Message component
