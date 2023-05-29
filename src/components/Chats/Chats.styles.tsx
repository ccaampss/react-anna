import styled from "styled-components";

export const ChatsStyled = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  overflow-y: scroll;
  height: 100%;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;
