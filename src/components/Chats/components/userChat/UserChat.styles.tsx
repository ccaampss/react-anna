import styled from "styled-components";

export const UserChatStyled = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: black;
  gap: 10px;

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
`;
