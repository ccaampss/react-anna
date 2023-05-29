import styled from "styled-components";

const AuthentificationStyles = styled.div`
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  .logo {
    color: #d7b7aa;
    font-family: arial, "Poppins";
    font-weight: bold;
    font-size: 1.3em;
  }

  .title {
    color: black;
    font-size: 1.3em;
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
    border-bottom: 1px solid #d7b7aa;

    &::placeholder {
      color: rgb(175, 175, 175);
    }
  }

  button {
    background-color: #d7b7aa;
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
    font-size: 12px;
    cursor: pointer;

    img {
      width: 32px;
    }
  }

  p {
    color: black;
    font-size: 12px;
    margin-top: 10px;
  }
`;

export default AuthentificationStyles;
