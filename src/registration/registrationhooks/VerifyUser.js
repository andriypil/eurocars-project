import axios from "axios";

const BASE_URL = "http://localhost:4000";


export const handleRegister = async (form) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/register`, {
            username: form.username,
            email: form.email,
            password: form.password,
        });

        return { success: true, message: data.message };
    } catch (err) {
        return {
            success: false,
            message: err.response?.data?.message || "Помилка сервера"
        };
    }
};

export const handleLogin = async (form) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/login`, {
            email: form.email,
            password: form.password,
        });

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        return { success: true, message: data.message };

    } catch (err) {
        return {
            success: false,
            message: err.response?.data?.message || "Помилка сервера"
        };
    }
};
