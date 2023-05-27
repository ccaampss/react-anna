import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Button from "./Button/Button";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar">
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <Button onClick={handleSignOut}>Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
