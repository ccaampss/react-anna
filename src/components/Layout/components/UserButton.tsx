import { Avatar, Menu, MenuItem } from "@mui/material"; // Import the Avatar, Menu, and MenuItem components
import React, { useContext } from "react"; // Import React and useContext hook
import { AuthContext } from "../../../context/AuthContext"; // Import the AuthContext
import { signOut } from "firebase/auth"; // Import the signOut function from the firebase/auth module
import { auth } from "../../../firebase"; // Import the auth object from the firebase module
import { UserButtonStyled } from "./UserButton.styled"; // Import the UserButtonStyled component

const UserButton = () => { // Define the UserButton component
  const { currentUser } = useContext(AuthContext);    // Destructure the currentUser from the AuthContext

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // Define the anchorEl state variable
  const open = Boolean(anchorEl); // Define the open variable

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { // Define the handleClick function
    setAnchorEl(event.currentTarget); // Set the anchorEl state variable to the currentTarget
  };
  const handleClose = () => { // Define the handleClose function
    setAnchorEl(null); // Set the anchorEl state variable to null
  };

  const handleSignOut = () => { // Define the handleSignOut function
    signOut(auth); // Sign out the user
  };
  return ( // Return the UserButtonStyled component with the user data
    <>
      <Menu // Return the Menu component with the user data
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-menu",
        }}
      >
        <MenuItem onClick={handleSignOut}>Logout</MenuItem> 
      </Menu> 

      <UserButtonStyled onClick={handleClick}> 
        <span>{currentUser.displayName}</span>
        <Avatar src={currentUser.photoURL}>{currentUser.displayName[0]}</Avatar> 
      </UserButtonStyled> 
    </>
  );
};

export default UserButton;
