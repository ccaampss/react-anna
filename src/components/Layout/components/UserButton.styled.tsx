import styled from "styled-components";

export const UserButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #a7bcff;
  border: none;
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
