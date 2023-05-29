import React, { useContext } from "react";
import { projectName } from "../../constants/metadata";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { Menu, MenuItem } from "@mui/material";
import UserButton from "./components/UserButton";

export const LayoutStyled = styled.div`
  background-color: #d7b7aa;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  nav {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
`;

const Layout = ({ children }: any) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <LayoutStyled>
      <nav>
        {projectName}

        {currentUser?.displayName && <UserButton />}
      </nav>

      <main className="content">{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
