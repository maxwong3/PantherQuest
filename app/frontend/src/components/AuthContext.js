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
    
    const login = async (username, password) => {
        setLoading(true);
        try {
            console.log("here");
            const res = await fetch('/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error('Login failed:', err.error);
            }

            const data = await res.json();
            setUser(data);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
        
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