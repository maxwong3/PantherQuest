import React from "react";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";




const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};



export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                   <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
                   <Route path="/login" element={<Login />} />
                   <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}