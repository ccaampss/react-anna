import styled from "styled-components";

export const MessageStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  /* the time where your message is sent is shown */
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
      background-color: #d3d3d3;
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
        background-color: #d7b7aa;
        color: #000000;
        border-radius: 10px 0px 10px 10px;
      }
    }
  }
`;
