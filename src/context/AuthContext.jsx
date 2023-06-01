import { createContext, useEffect, useState } from "react"; // import createContext, useEffect, and useState
import { auth } from "../firebase"; // import the auth from firebase
import { onAuthStateChanged } from "firebase/auth"; // import the onAuthStateChanged from firebase

export const AuthContext = createContext(); // create a AuthContext

export const AuthContextProvider = ({ children }) => { // create a AuthContextProvider
  const [currentUser, setCurrentUser] = useState({}); // create a currentUser state

  useEffect(() => { // useEffect to run the following code
    const unsub = onAuthStateChanged(auth, (user) => { // create a unsub variable
      setCurrentUser(user); // set the currentUser state to the user
    });

    return () => { // return the following
      unsub(); // unsubscribe
    };
  }, []); // run this code when the component mounts

  return ( // return the following
    <AuthContext.Provider value={{ currentUser }}>   
      {children} 
    </AuthContext.Provider> 
  );
};
