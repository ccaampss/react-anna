import Home from "./pages/Home"; // Import the Home component
import Login from "./pages/authentification/Login/Login"; // Import the Login component
import Register from "./pages/authentification/Register/Register"; // Import the Register component
import "./style.scss"; // Import the style.scss file
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import the BrowserRouter, Routes, Route, and Navigate components from the react-router-dom module
import { useContext } from "react"; // Import React and useContext hook
import { AuthContext } from "./context/AuthContext"; // Import the AuthContext component
import React from "react"; // Import React
import Layout from "./components/Layout/Layout"; // Import the Layout component

function App() { // Define the App component
  const { currentUser } = useContext(AuthContext); // Define the currentUser variable

  const ProtectedRoute = ({ children }) => { // Define the ProtectedRoute component
    if (!currentUser) { // If the currentUser variable doesn't exist, navigate to the login page
      return <Navigate to="/login" />;    
    }

    return children; // Return the children
  };

  return ( // Return the BrowserRouter component with the Routes component with the Route components
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export the App component
