import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX80Ok09-3KKoMmdNk88bczduEuhJs0r8",
  authDomain: "chat-a489f.firebaseapp.com",
  projectId: "chat-a489f",
  storageBucket: "chat-a489f.appspot.com",
  messagingSenderId: "351684203516",
  appId: "1:351684203516:web:ed34e3870cb678348fd879"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
