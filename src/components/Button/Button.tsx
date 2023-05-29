import React from "react";
import { ButtonStyled } from "./Button.styles";
import { Ring } from "@uiball/loaders";

interface IButton {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({ children, loading = false, onClick }: IButton) => {
  return (
    <ButtonStyled onClick={onClick}>
      {loading ? <Ring color="#fff" size={15} /> : children}
    </ButtonStyled>
  );
};

export default Button;
