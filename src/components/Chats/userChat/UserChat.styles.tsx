import styled from "styled-components";

interface UserChatStyledProps {
  isThisUserOpened: boolean;
}
export const UserChatStyled = styled.div<UserChatStyledProps>`
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: black;
  gap: 10px;
  background-color: #ffffff;
  padding: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .lastMessage {
      font-size: 0.8em;
      opacity: 0.7;
    }
  }
  :hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
  ${({ isThisUserOpened }) =>
    isThisUserOpened &&
    `
    background-color: #ebebeb;
  `}
`;
