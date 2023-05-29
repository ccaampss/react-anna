import { Ring } from "@uiball/loaders";
import React from "react";
import styled from "styled-components";

export const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Loading = () => {
  return (
    <LoadingStyled>
      <Ring />
    </LoadingStyled>
  );
};
