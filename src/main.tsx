import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM
import App from "./App"; // Import the App component
import { AuthContextProvider } from "./context/AuthContext"; // Import the AuthContextProvider component
import { ChatContextProvider } from "./context/ChatContext"; // Import the ChatContextProvider component

const root = ReactDOM.createRoot( // Create a root
  document.getElementById("root") as HTMLElement // Get the root element
);
root.render( // Render the App component
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
