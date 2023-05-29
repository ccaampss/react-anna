import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px;
  justify-content: space-between;
  border-radius: 10px;

  form {
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 5px;

    input {
      background-color: transparent;
      border: none;
      outline: none;
    }
  }

  .searchResults {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    border-top: 1px solid #e0e0e0;
    .userChat {
      display: flex;
      align-items: center;
      border-radius: 10px;
      color: black;
      background-color: #ffffff;
      width: 100%;

      gap: 10px;
      padding: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      :hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
  }
`;
