import styled from "styled-components"; // Import styled-components library

const AuthentificationStyles = styled.div`
  // Define a styled component called AuthentificationStyles
  background-color: white; // Set the background color to white
  padding: 20px 60px; // Set the padding to 20px 60px
  border-radius: 10px; // Set the border radius to 10px
  display: flex; // Set the display to flex
  flex-direction: column; // Set the flex direction to column
  gap: 10px; // Set the gap between child elements to 10px
  align-items: center; // Set the align items to center
  position: relative; // Set the position to relative
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2); // Set the box shadow to 0px 5px 10px 0px rgba(0, 0, 0, 0.2)

  .logo {
    // Style the logo
    color: #d7b7aa; // Set the color to #d7b7aa
    font-family: arial, "Poppins"; // Set the font family to arial, "Poppins"
    font-weight: bold; // Set the font weight to bold
    font-size: 1.3em; // Set the font size to 1.3em
  }

  .title {
    // Style the title
    color: black; // Set the color to black
    font-size: 1.3em; // Set the font size to 1.3em
    position: absolute; // Set the position to absolute
    top: -24px; // Set the top to -24px
    background-color: #fff; // Set the background color to #fff
    padding: 10px 20px; // Set the padding to 10px 20px
    border-radius: 10px; // Set the border radius to 10px
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2); // Set the box shadow to 0px 5px 10px 0px rgba(0, 0, 0, 0.2)
  }

  form {
    // Style the form
    padding: 40px 0; // Set the padding to 40px 0
    display: flex; // Set the display to flex
    flex-direction: column; // Set the flex direction to column
    gap: 15px; // Set the gap between child elements to 15px
  }

  input {
    // Style the input
    padding: 15px; // Set the padding to 15px
    border: none; // Set the border to none
    width: 250px; // Set the width to 250px
    border-bottom: 1px solid #d7b7aa; // Set the border bottom to 1px solid #d7b7aa

    &::placeholder {
      // Style the placeholder
      color: rgb(175, 175, 175); // Set the color to rgb(175, 175, 175)
    }
  }

  button {
    // Style the button
    background-color: #d7b7aa; // Set the background color to #d7b7aa
    color: white; // Set the color to white
    padding: 10px; // Set the padding to 10px
    font-weight: bold; // Set the font weight to bold
    border: none; // Set the border to none
    border-radius: 5px; // Set the border radius to 5px
    cursor: pointer; // Set the cursor to pointer
  }

  label {
    // Style the label
    display: flex; // Set the display to flex
    align-items: center; // Set the align items to center
    gap: 10px; // Set the gap between child elements to 10px
    font-size: 12px; // Set the font size to 12px
    cursor: pointer; // Set the cursor to pointer

    img {
      width: 32px; // Set the width to 32px
    }
  }

  p {
    // Style the p
    color: black; // Set the color to black
    font-size: 12px; // Set the font size to 12px
    margin-top: 10px; // Set the margin top to 10px
  }
`;

export default AuthentificationStyles; // Export the AuthentificationStyles component
