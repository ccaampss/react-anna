import React, { useContext } from "react"; // Import React and useContext hook
import Sidebar from "../components/Sidebar/Sidebar"; // Import the Sidebar component
import Chat from "../components/Chat"; // Import the Chat component
import { HomeStyled } from "./Home.styles"; // Import the HomeStyled component
import { ChatContext } from "../context/ChatContext"; // Import the ChatContext component

const Home = () => { // Define the Home component
  const { data: openChatData } = useContext(ChatContext); // Define the openChatData variable
  return ( // Return the HomeStyled component with the Sidebar and Chat components
    <HomeStyled> 
      <Sidebar />
      {openChatData.user.uid && <Chat />} 
    </HomeStyled>
  );
};

export default Home; // Export the Home component
