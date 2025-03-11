import User from "../Model/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function login(req, res) {
    const { email, password } = req.body;

    // Check for missing fields
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    User.findOne({ email })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "User is not registered" });
            }

            // Compare password
            const validPassword = bcrypt.compareSync(password, data.password);

            if (!validPassword) {
                return res.status(403).json({ message: "Invalid Password" });
            }

            // Generate JWT token with longer expiration (e.g., 1 hour or 24 hours)
            const token = jwt.sign({ id: data._id }, "myKey", { expiresIn: "1h" });

            console.log(token)

            res.status(200).send({
                user: {
                    email: data.email,
                    name: data.name,
                },
                accessToken: token,
            });
        })
        .catch((err) => res.status(500).send({ message: err.message }));
}


export function register(req, res) {
    const { name, email, password } = req.body;

    // Check for missing fields
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if password is a valid string
    if (typeof password !== 'string' || password.trim() === '') {
        return res.status(400).json({ message: "Password must be a non-empty string" });
    }

    User.findOne({ email }).then((data) => {
        if (data) {
            return res.status(403).json({ message: "User already exists" });
        } else {
            // Hash the password
            const hashedPassword = bcrypt.hashSync(password, 10);

            // Create a new user instance
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            // Save new user to the database
            newUser.save()
                .then((data) => {
                    return res.status(201).json({ message: "User registered successfully", user: data });
                })
                .catch((err) => res.status(500).json({ message: err.message }));
        }
    });
}
