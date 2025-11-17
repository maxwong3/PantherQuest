import React from "react";
import { AuthProvider, useAuth } from "./AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";



const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};



export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                   <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
                   <Route path="/admin" element={ <ProtectedRoute> <AdminPanel /> </ProtectedRoute> } />
                   <Route path="/login" element={<Login />} />
                   <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}