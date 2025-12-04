import { useState } from "react";
import { handleLogin } from "../registrationhooks/VerifyUser";
import { Eye, EyeOff } from "lucide-react";
import "./Entry.css";

export const Entry = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const result = await handleLogin(form);
        setLoading(false);

        if (!result.success) {
            setError(result.message);
        } else {
            alert(result.message);
        }
    };

    return (
        <section className="Entry">
            <div>
                <div className="login">
                    <h1>Увійти</h1>
                </div>

                <form className="loginForm" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <div className="password">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Пароль"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff /> : <Eye />}
                        </span>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Завантаження..." : "Увійти"}
                    </button>

                    {error && <p className="error">{error}</p>}
                </form>

                <div className="createAnAccount">
                    <h2>Немає облікового запису? Створіть його</h2>
                </div>
            </div>
        </section>
    );
};

export default Entry;
