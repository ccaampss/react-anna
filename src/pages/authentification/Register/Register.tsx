import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { TbUserCircle } from "react-icons/tb";
import AuthentificationStyles from "../Authentification.styles";
import { projectName } from "../../../constants/metadata";

const Register = () => {
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0] || null;

    try {
      //check if the user already exists
      const thisUserExists = await getDoc(doc(db, "users", displayName));
      if (thisUserExists.exists()) {
        setErr("User already exists");
        setLoading(false);
        return;
      }

      //Create user with a unique displayName
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      file &&
        (await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });

              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              console.log(err);
              setErr(err.message);
              setLoading(false);
            }
          });
        }));
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };

  return (
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

export default Register;
