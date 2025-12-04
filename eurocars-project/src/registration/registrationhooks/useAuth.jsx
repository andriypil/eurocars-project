import { useState } from "react";


export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleRegister = async (userData) => {
        setLoading(true);
        try {
            const data = await registerUser(userData);
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (credentials) => {
        setLoading(true);
        try {
            const data = await loginUser(credentials);
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { user, error, loading, handleRegister, handleLogin };
};

