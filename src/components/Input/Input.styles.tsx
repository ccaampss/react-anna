import styled from "styled-components";

export const InputStyled = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  // type something
  input {
    width: 100%;
    border: none;
    outline: none;
    color: rgb(0, 0, 0);
    cursor: pointer;

    &::placeholder {
      color: lightgrey;
    }
  }
  .send {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    padding: 5px;
    background-color: white;
    border-radius: 5px;
    :hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
