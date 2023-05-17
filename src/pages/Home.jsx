import React from "react";
import SideBar from "../components/Sidebar";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="Home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default Home;