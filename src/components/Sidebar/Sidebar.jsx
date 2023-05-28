import React from "react";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
import { SidebarStyled } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <SidebarStyled>
      <div className="search">
        <Search />
      </div>

      <div className="chats">
        <Chats />
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
