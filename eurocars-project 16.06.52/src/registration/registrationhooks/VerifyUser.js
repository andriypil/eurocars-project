import axios from "axios";

const BASE_URL = "https://eurocars-backend.onrender.com";


export const handleRegister = async (form) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/register`, form);
        return { success: true, message: data.message };
    } catch (err) {
        return { success: false, message: err.response?.data?.message || "Помилка сервера" };
    }
};

export const handleLogin = async (form) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/login`, form);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        return { success: true, message: data.message };
    } catch (err) {
        return { success: false, message: err.response?.data?.message || "Помилка сервера" };
    }
};
