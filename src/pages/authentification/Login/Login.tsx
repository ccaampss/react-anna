import React, { useState } from "react"; // Import React and useState hook
import { useNavigate, Link } from "react-router-dom"; // Import the useNavigate and Link components from the react-router-dom module
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the signInWithEmailAndPassword function from the firebase/auth module
import { auth } from "../../../firebase"; // Import the auth object from the firebase module
import AuthentificationStyles from "../Authentification.styles"; // Import the AuthentificationStyles component
import { projectName } from "../../../constants/metadata"; // Import the projectName variable from the constants/metadata.ts file

const Login = () => { // Define the Login component
  const [err, setErr] = useState(false); // Define the err state variable
  const navigate = useNavigate(); // Define the navigate variable

  const handleSubmit = async (e) => { // Define the handleSubmit function
    e.preventDefault(); // Prevent the default form submission
    const email = e.target[0].value; // Define the email variable
    const password = e.target[1].value; // Define the password variable

    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in the user with the email and password
      navigate("/"); // Navigate to the home page
    } catch (err) { // Catch any errors
      setErr(true); // Set the err state variable to true
    }
  };
  return ( // Return the AuthentificationStyles component with the login form
    <AuthentificationStyles> 
      <span className="title">Login</span> 
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
        {err && <span>Something went wrong</span>}
      </form>
      <p>
        You don't have an account? <Link to="/register">Register</Link>
      </p>
    </AuthentificationStyles>
  );
};

export default Login; // Export the Login component
