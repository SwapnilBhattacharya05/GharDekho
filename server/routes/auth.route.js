import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../schema/userSchema.js";

const router = express.Router();

//Route 1: POST request to create an account. Login not required
router.post("/createuser", [
    body('username', "Enter a valid username").exists(),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be at least 8 characters").isLength({ min: 8 }),
    body('phone', "Enter a valid phone number").isLength({ min: 10 }),
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        let success = false;

        //check whether the user with this email exists already 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: success, error: "A user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: securedPassword,
            phone: req.body.phone
        })

        const data = {
            id: user.id
        }

        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        success = true;
        res.status(201).json({ success, authToken, message: "User Created Successfully" });

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

//Route 2: POST request to login. Login not required
router.post("/login", [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists(),
], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let success = false;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: success, error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);     //returns boolean
        if (!passwordCompare) {
            return res.status(400).json({ success: success, error: "Please try to login with correct credentials" });
        }

        const payload = {
            id: user.id
        }

        const authToken = jwt.sign(payload, process.env.JWT_SECRET);
        success = true;
        res.status(200).send({ success, authToken });

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

//Route 2:post request to create user using firebase's google authentication
router.post("/google", async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            return res.status(200).json({ success: true, authToken, msg: `Welcome Back, ${user.username}!` });
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const salt = await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(generatedPassword, salt);

            user = new User({
                username: req.body.username.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: securedPassword,
                phone: Math.floor(Math.random() * 9000000000) + 1000000000,
                photo: req.body.photo
            });
            await user.save();

            const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            return res.status(200).json({ success: true, authToken, msg: "Account Created Successfully!" });
        }

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ msg: "Internal Server error", error });
    }
})

export default router;