import React from "react";
import { ButtonStyled } from "./Button.styles";
import { Ring } from "@uiball/loaders";

const Button = ({ children, loading, onClick }) => {
  return (
    <ButtonStyled onClick={onClick}>
      {loading ? <Ring color="#fff" size={15} /> : children}
    </ButtonStyled>
  );
};

export default Button;
