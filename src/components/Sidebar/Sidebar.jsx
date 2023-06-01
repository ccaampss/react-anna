import React from "react"; // import react
import Search from "../Search/Search"; // import the Search component
import Chats from "../Chats/Chats"; // import the Chats component
import { SidebarStyled } from "./Sidebar.styles"; // import the SidebarStyled component

const Sidebar = () => { // create a Sidebar component
  return ( // return the following
    <SidebarStyled> 
      <div className="search">
        <Search /> 
      </div> 

      <div className="chats">
        <Chats />
      </div>
    </SidebarStyled> // return the SidebarStyled component
  );
};

export default Sidebar; // export the Sidebar component
