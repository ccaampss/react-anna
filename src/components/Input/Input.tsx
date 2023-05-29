import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Button from "../Button/Button";
import { LuImagePlus } from "react-icons/lu";
import { InputStyled } from "./Input.styles";
import { Snackbar } from "@mui/material";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null as any);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [error, setError] = useState("");
  const open = Boolean(error);
  const handleClose = () => setError("");

  const handleSend = async () => {
    if (!text && !img) {
      setError("You must send something");
      return;
    }
    if (img) {
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
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <>
      <Snackbar
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

export default Input;
