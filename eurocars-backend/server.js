import express from "express";
import cors from "cors";
import fs from "fs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = 4000;
const USERS_FILE = "./users.json";
const SECRET = "supersecretkey123";

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

const readUsers = () => {
    if (!fs.existsSync(USERS_FILE)) return [];
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
};
const writeUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    let users = readUsers();
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "Користувач з таким email вже існує" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: Date.now().toString(), username, email, password: hashedPassword };
    users.push(newUser);
    writeUsers(users);
    return res.json({ message: "Користувач успішно зареєстрований!" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    let users = readUsers();
    const user = users.find(u => u.email === email);
    if (!user) return res.status(400).json({ message: "Невірний email або пароль" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Невірний email або пароль" });
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: "1h" });
    return res.json({ message: "Вхід успішний!", token, user: { id: user.id, username: user.username, email: user.email } });
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
