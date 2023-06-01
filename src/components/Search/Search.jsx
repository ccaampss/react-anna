import React, { useContext, useState } from "react"; // useState is a hook that allows us to use state in a functional component
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore"; // import the firestore database
import { db } from "../../firebase"; // import the firebase database
import { AuthContext } from "../../context/AuthContext"; // import the AuthContext
import { SearchStyled } from "./Search.styles"; // import the SearchStyled component
import Button from "../Button/Button"; // import the Button component
import { TbSearch } from "react-icons/tb"; // import the TbSearch icon


const Search = () => { // create a Search component
  const [username, setUsername] = useState(""); // create a username state
  const [user, setUser] = useState(null); // create a user state
  const [err, setErr] = useState(false); // create a err state

  const { currentUser } = useContext(AuthContext); // get the currentUser from the AuthContext

  const handleSearch = async () => { // create a handleSearch function
    const q = query( // create a query
      collection(db, "users"), // get the users collection
      where("displayName", "==", username) // where the displayName is equal to the username
    );

    try {
      const querySnapshot = await getDocs(q); // get the querySnapshot
      querySnapshot.forEach((doc) => { // loop through the querySnapshot
        setUser(doc.data()); // set the user state to the doc.data()
      });
    } catch (err) { // catch any errors
      setErr(true); // set the err state to true
    }
  };

  const handleKey = (e) => { // create a handleKey function
    e.code === "Enter" && handleSearch(); // if the key pressed is the enter key, run the handleSearch function
  };

  const handleSelect = async () => { // create a handleSelect function
    //check whether the group(chats in firestore) exists, if not create
    if (!currentUser) return; // if there is no currentUser, return
    if (!user) return; // if there is no user, return

    const combinedId = 
      currentUser.uid > user.uid 
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid; // create a combinedId
    try { // try to run the following code
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      } else {
        // if chat exists, update user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) { // catch any errors
      console.log(err.message); // log the error message
    } finally { // finally
      setUser(null); // set the user state to null
      setUsername(""); // set the username state to an empty string
    }
  };
  return ( // return the following
    <SearchStyled> 
      <form // create a form
        className="searchForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input // create an input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Button>
          <TbSearch />
        </Button>
      </form>

      {user && ( // if there is a user, return the following
        <section className="searchResults"> 
          <div className="userChat" onClick={handleSelect}>
            <img src={user.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{user.displayName}</span>
            </div>
          </div>
        </section>
      )}
    </SearchStyled>
  );
};

export default Search; // export the Search component
