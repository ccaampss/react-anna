import styled from "styled-components";

const AuthentificationStyles = styled.div`
  background-color: #fff;
  padding: 20px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  .logo {
    color: #a7bcff;
    font-family: arial, "Poppins";
    font-weight: bold;
    font-size: 24px;
  }

  .title {
    color: #a7bcff;
    font-size: 25px;
    position: absolute;
    top: -24px;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }

  form {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input {
    padding: 15px;
    border: none;
    width: 250px;
    border-bottom: 1px solid #a7bcff;

    &::placeholder {
      color: rgb(175, 175, 175);
    }
  }

  button {
    background-color: #7b96ec;
    color: white;
    padding: 10px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #8da4f1;
    font-size: 12px;
    cursor: pointer;

    img {
      width: 32px;
    }
  }

  p {
    color: #5d5b8d;
    font-size: 12px;
    margin-top: 10px;
  }
`;

export default AuthentificationStyles;
