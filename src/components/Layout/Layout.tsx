import React, { useContext } from "react"; // Import React and useContext hook
import { projectName } from "../../constants/metadata"; // Import the projectName variable
import styled from "styled-components"; // Import styled-components library
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext
import { Menu, MenuItem } from "@mui/material"; // Import the Menu and MenuItem components
import UserButton from "./components/UserButton"; // Import the UserButton component

export const LayoutStyled = styled.div` // Define a styled component called LayoutStyled
  background-color: #d7b7aa; // Set the background color to #d7b7aa
  display: flex; // Set the display to flex
  align-items: center; // Set the align items to center
  width: 100%; // Set the width to 100%
  height: fit-content; // Set the height to fit-content
  min-height: 100vh; // Set the min height to 100vh
  display: flex; // Set the display to flex
  flex-direction: column; // Set the flex direction to column
  gap: 40px; // Set the gap between child elements to 40px

  .content { // Style the content
    margin: 40px; // Set the margin to 40px
    width: 100%; // Set the width to 100%
    height: 100%; // Set the height to 100%
    display: flex; // Set the display to flex
    flex-direction: column; // Set the flex direction to column
    gap: 10px; // Set the gap between child elements to 10px
    align-items: center; // Set the align items to center
    justify-content: center; // Set the justify content to center
  }
  nav { // Style the nav
    width: 100%; // Set the width to 100%
    padding: 10px 20px; // Set the padding to 10px 20px
    display: flex; // Set the display to flex
    flex-direction: row; // Set the flex direction to row
    gap: 10px; // Set the gap between child elements to 10px
    align-items: center; // Set the align items to center
    align-content: center; // Set the align content to center
    justify-content: space-between;     // Set the justify content to space-between
  }
`;

const Layout = ({ children }: any) => { // Define a Layout component that takes children as a prop
  const { currentUser } = useContext(AuthContext);    // Destructure the currentUser from the AuthContext

  return ( // Return the following
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
