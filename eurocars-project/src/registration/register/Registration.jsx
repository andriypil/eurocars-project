import { Eye, EyeOff } from "lucide-react";
import { handleRegister } from "../registrationhooks/VerifyUser";
import { useState } from "react";
import './Registration.css';

export const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (form.password !== form.confirmPassword) {
            alert("Паролі не співпадають");
            return;
        }

        setLoading(true);
        const result = await handleRegister(form);
        setLoading(false);

        if (!result.success) {
            setError(result.message);
        } else {
            alert(result.message);
        }
    };

    return (
        <section className="Registration">
            <div>
                <div className="registering">
                    <h1>Зареєструватися</h1>
                </div>

                <form className="registeringForm" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Ім'я" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

                    <div className="password">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Пароль"
                            onChange={handleChange}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <EyeOff /> : <Eye />}
                        </span>
                    </div>

                    <div className="password">
                        <input
                            type={showConfirmedPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Підтвердьте пароль"
                            onChange={handleChange}
                            required
                        />
                        <span onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}>
                            {showConfirmedPassword ? <EyeOff /> : <Eye />}
                        </span>
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Завантаження..." : "Зареєструватися"}
                    </button>

                    {error && <p className="error">{error}</p>}
                </form>

                <div className="createAnAccount">
                    <h2>Є обліковий запис? Увійдіть</h2>
                </div>
            </div>
        </section>
    );
};
