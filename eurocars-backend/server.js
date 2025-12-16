import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "./modules/User.js";

const app = express();
const PORT = 4000;
const SECRET = "supersecretkey123";

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb://pilhovychandrii_db_user:eurocars2025@localhost:27017/eurocars?authSource=admin";


mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log("MongoDB connection error:", err));

app.post("/register", async (req, res) => {
    console.log("REGISTER BODY:", req.body);

    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Заповніть усі поля" });
        }

        const existing = await User.findOne({ email });
        if (existing) {
            return res
                .status(400)
                .json({ message: "Користувач з таким email вже існує" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.json({
            message: "Користувач успішно зареєстрований!",
            user: newUser,
        });
    } catch (err) {
        console.log("REGISTER ERROR:", err);
        res.status(500).json({ message: "Помилка сервера" });
    }
});


app.post("/login", async (req, res) => {
    console.log("LOGIN BODY:", req.body);

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Заповніть усі поля" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Невірний email або пароль" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Невірний email або пароль" });
        }

        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });

        res.json({
            message: "Вхід успішний!",
            token,
            user,
        });
    } catch (err) {
        console.log("LOGIN ERROR:", err);
        res.status(500).json({ message: "Помилка сервера" });
    }
});

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
