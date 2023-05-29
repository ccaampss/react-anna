import React, { useContext } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat";
import { HomeStyled } from "./Home.styles";
import { ChatContext } from "../context/ChatContext";

const Home = () => {
  const { data: openChatData } = useContext(ChatContext);
  return (
    <HomeStyled>
      <Sidebar />
      {openChatData.user.uid && <Chat />}
    </HomeStyled>
  );
};

export default Home;
