import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (storedUser && token) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);  
            
        }setLoading(false);
    }, []);
    
    const login = (username, password) => {
        // Validate test account
        if (username === 'test' && password === 'test') {
            const userData = { username: 'test', role: 'user' };
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', 'test-token');
            setUser(userData);
            setIsAuthenticated(true);
            return true;
        }
        return false;
        
        // add real authentication logic here 

    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);