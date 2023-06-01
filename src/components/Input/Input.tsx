import React, { useContext, useState } from "react"; // Import React and useContext and useState hooks
import { AuthContext } from "../../context/AuthContext"; // Import the AuthContext
import { ChatContext } from "../../context/ChatContext"; // Import the ChatContext
import { 
  arrayUnion, 
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore"; // Import the arrayUnion, doc, serverTimestamp, Timestamp, and updateDoc functions from the firebase/firestore module
import { db, storage } from "../../firebase"; // Import the db and storage objects from the firebase module
import { v4 as uuid } from "uuid"; // Import the v4 function from the uuid module
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"; // Import the getDownloadURL, ref, and uploadBytesResumable functions from the firebase/storage module
import Button from "../Button/Button"; // Import the Button component
import { LuImagePlus } from "react-icons/lu"; // Import the LuImagePlus icon
import { InputStyled } from "./Input.styles"; // Import the InputStyled component
import { Snackbar } from "@mui/material"; // Import the Snackbar component

const Input = () => { // Define the Input component
  const [text, setText] = useState(""); // Define the text state variable
  const [img, setImg] = useState(null as any); // Define the img state variable

  const { currentUser } = useContext(AuthContext); // Destructure the currentUser from the AuthContext
  const { data } = useContext(ChatContext); // Destructure the data from the ChatContext
  const [error, setError] = useState(""); // Define the error state variable
  const open = Boolean(error); // Define the open variable
  const handleClose = () => setError(""); // Define the handleClose function

  const handleSend = async () => { // Define the handleSend function
    if (!text && !img) { // If the text and img state variables don't exist, set the error state variable to "You must send something"
      setError("You must send something");  // Set the error state variable to "You must send something"
      return; // Return
    }
    if (img) { // If the img state variable exists, upload the image to the storage bucket
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else { // If the img state variable doesn't exist, update the chats collection with the new message
      await updateDoc(doc(db, "chats", data.chatId), { 
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      }); 
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), { // Update the userChats collection with the new message
      [data.chatId + ".lastMessage"]: { 
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(), 
    }); 

    await updateDoc(doc(db, "userChats", data.user.uid), { // Update the userChats collection with the new message
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText(""); // Set the text state variable to an empty string
    setImg(null); // Set the img state variable to null
  };

  return ( // Return the InputStyled component with the input and send button
    <>
      <Snackbar // Return the Snackbar component with the error message
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={error}
      />
      <InputStyled> 
        <input
          type="text"
          required
          placeholder="Type something..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="send"> 
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            name="file"
            onChange={(e: any) => setImg(e.target.files[0])}
          />

          <label className="icon" htmlFor="file"> 
            <LuImagePlus />
            {img && <span>{img.name}</span>}
          </label>
          <Button onClick={handleSend}>Send </Button>
        </div>
      </InputStyled>
    </>
  );
};

export default Input; // Export the Input component
