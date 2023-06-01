import { createContext, useContext, useReducer } from "react"; // import createContext, useContext, and useReducer
import { AuthContext } from "./AuthContext"; // import the AuthContext

export const ChatContext = createContext(); // create a ChatContext

export const ChatContextProvider = ({ children }) => {
  // create a ChatContextProvider
  const { currentUser } = useContext(AuthContext); // get the currentUser from the AuthContext
  const INITIAL_STATE = {
    // create a INITIAL_STATE
    chatId: "null", // set the chatId to null
    user: {}, // set the user to an empty object
  };

  const chatReducer = (state, action) => {
    // create a chatReducer
    switch (
      action.type // switch statement
    ) {
      case "CHANGE_USER": // if the action type is CHANGE_USER
        return {
          // return the following
          user: action.payload, // set the user to the action payload
          // set the chatId to the following
          chatId:
            currentUser.uid > action.payload.uid // if the currentUser.uid is greater than the action.payload.uid
              ? currentUser.uid + action.payload.uid // set the chatId to currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid, // else set the chatId to action.payload.uid + currentUser.uid
        };

      default: // default case
        return state; // return the state
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE); // create a state and dispatch from the useReducer

  return (
    // return the following
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
