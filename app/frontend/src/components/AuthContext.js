import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (storedUser && token) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);
    
    const login = async (username, password) => {
        setLoading(true);
        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({username, password})
            });
            
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Login failed');
            }

            const data = await res.json();
            
            // Save user and token to localStorage
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('token', 'fake-token'); // Add real token later
            
            setUser(data);
            setIsAuthenticated(true);
            return true;
        } catch (err) {
            console.error('Login error:', err);
            throw err; // Re-throw so Login.js can catch it
        } finally {
            setLoading(false);
        }
    };

    

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    const register = async (username, password, name) => {
    setLoading(true);
    try {
        const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, name })
        });

            const data = await res.json();
            setUser(data.user);
            return true;

        } catch (err) {
            console.error(err);
            return false;
        } finally {
            setLoading(false);
        }
    };


    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading, user, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);