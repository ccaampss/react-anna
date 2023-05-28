import Home from "./pages/Home";
import Login from "./pages/authentification/Login/Login";
import Register from "./pages/authentification/Register/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import React from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
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

export default App;
