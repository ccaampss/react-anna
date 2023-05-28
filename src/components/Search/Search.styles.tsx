import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 10px;
  justify-content: space-between;

  border-radius: 10px;

  .searchForm {
    padding: 5px;

    input {
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
`;
