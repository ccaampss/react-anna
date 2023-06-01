import React, { useState } from "react"; // Import React and useState hook
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import the createUserWithEmailAndPassword and updateProfile functions from the firebase/auth module
import { auth, db, storage } from "../../../firebase";  // Import the auth, db, and storage objects from the firebase module
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Import the ref, uploadBytesResumable, and getDownloadURL functions from the firebase/storage module
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import the doc, setDoc, and getDoc functions from the firebase/firestore module
import { useNavigate, Link } from "react-router-dom"; // Import the useNavigate and Link components from the react-router-dom module
import { TbUserCircle } from "react-icons/tb"; // Import the TbUserCircle icon
import AuthentificationStyles from "../Authentification.styles"; // Import the AuthentificationStyles component
import { projectName } from "../../../constants/metadata"; // Import the projectName variable from the constants/metadata.ts file

const Register = () => { // Define the Register component
  const [err, setErr] = useState(""); // Define the err state variable
  const [loading, setLoading] = useState(false); // Define the loading state variable
  const navigate = useNavigate(); // Define the navigate variable

  const handleSubmit = async (e: any) => { // Define the handleSubmit function
    setLoading(true); // Set the loading state variable to true
    e.preventDefault(); // Prevent the default form submission
    const displayName = e.target[0].value; // Define the displayName variable
    const email = e.target[1].value; // Define the email variable
    const password = e.target[2].value; // Define the password variable
    const file = e.target[3].files[0] || null; // Define the file variable

    try {
      //check if the user already exists
      const thisUserExists = await getDoc(doc(db, "users", displayName)); // Define the thisUserExists variable
      if (thisUserExists.exists()) { // If the thisUserExists variable exists, set the err state variable to "User already exists" and set the loading state variable to false
        setErr("User already exists"); 
        setLoading(false); 
        return; // Return
      }

      //Create user with a unique displayName
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime(); // Define the date variable
      const storageRef = ref(storage, `${displayName + date}`); // Define the storageRef variable

      file && // If the file variable exists, upload the file to the storageRef
        (await uploadBytesResumable(storageRef, file).then(() => { // Upload the file to the storageRef
          getDownloadURL(storageRef).then(async (downloadURL) => { // Get the downloadURL
            try {
              //Update profile
              await updateProfile(res.user, { // Update the profile
                displayName, // Set the displayName to the displayName variable
                photoURL: downloadURL, // Set the photoURL to the downloadURL variable
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), { // Set the doc on the users collection to the user's uid
                uid: res.user.uid, // Set the uid to the user's uid
                displayName, // Set the displayName to the displayName variable
                email, // Set the email to the email variable
                photoURL: downloadURL, // Set the photoURL to the downloadURL variable
              });

              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {}); // Set the doc on the userChats collection to the user's uid
              navigate("/"); // Navigate to the home page
            } catch (err) { // Catch any errors
              console.log(err); // Log the error
              setErr(err.message); // Set the err state variable to the error message
              setLoading(false); // Set the loading state variable to false
            }
          });
        }));
    } catch (err) { // Catch any errors
      setErr(err.message); // Set the err state variable to the error message
      setLoading(false); // Set the loading state variable to false
    }
  };

  return ( // Return the AuthentificationStyles component with the register form
    <AuthentificationStyles> 
      <span className="title">Register</span>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="User name" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <TbUserCircle /> <span>Add an avatar</span>
        </label>
        <button disabled={loading}>Sign up</button>
        {loading && "Uploading and compressing the image please wait..."}
        {err && <span>{err}</span>}
      </form>
      <p>
        You do have an account? <Link to="/login">Login</Link>
      </p>
    </AuthentificationStyles>
  );
};

export default Register; // Export the Register component
