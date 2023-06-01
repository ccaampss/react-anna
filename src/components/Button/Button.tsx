import React from "react";
import { ButtonStyled } from "./Button.styles";
import { Ring } from "@uiball/loaders";

// Define the interface for the Button component props
interface IButton {
  children: React.ReactNode; // The content of the button
  loading?: boolean; // Optional prop to indicate if the button is in a loading state
  onClick?: () => void; // Optional click event handler for the button
}

// Define the Button component
const Button = ({ children, loading = false, onClick }: IButton) => {
  return (
    <ButtonStyled onClick={onClick}>
      {" "}
      {/* Render the ButtonStyled component with the provided onClick event handler */}
      {loading ? <Ring color="#fff" size={15} /> : children}{" "}
      {/* Render either the loading spinner or the button content based on the loading prop */}
    </ButtonStyled>
  );
};

export default Button; // Export the Button component as the default export
