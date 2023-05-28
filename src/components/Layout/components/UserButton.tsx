import { Menu, MenuItem } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { UserButtonStyled } from "./UserButton.styled";

const UserButton = () => {
  const { currentUser } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Menu
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
        <img src={currentUser.photoURL} alt="Profile image" />
      </UserButtonStyled>
    </>
  );
};

export default UserButton;
