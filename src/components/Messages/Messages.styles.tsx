import styled from "styled-components";

export const MessagesStyled = styled.div`
  background-color: #ffffff;
  padding: 10px;
  height: calc(100% - 160px);
  overflow-y: scroll;
  border-radius: 10px;

  .message {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    // el cuando lo ha enviado (just now)
    .messageInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3px;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }
      .messageTime {
        font-size: 0.7em;
      }
    }

    .messageContent {
      max-width: 80%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 0px 10px 10px 10px;
        max-width: max-content;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
    &.owner {
      flex-direction: row-reverse;

      .messageContent {
        align-items: flex-end;
        p {
          background-color: #7b96ec;
          color: white;
          border-radius: 10px 0px 10px 10px;
        }
      }
    }
  }
`;
