import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat";
import { HomeStyled } from "./Home.styles";

const Home = () => {
  return (
    <HomeStyled>
      <Sidebar />
      <Chat />
    </HomeStyled>
  );
};

export default Home;
