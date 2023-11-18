import express from "express";
import { body, validationResult } from "express-validator";
import fetchUser from "../middleware/fetchUser.js";
import {fetchContacts} from "../controller/contact.controller.js";
import Contact from "../schema/contactSchema.js";
const router = express.Router();

//Route 1: post request to post a contact form to admin. Login required
router.post("/postcontact", fetchUser, [
    body("name", "Enter your name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("phone", "Enter a valid phone number").isInt().isLength({ min: 10 }),
    body("message", "Enter a message at least of 10 characters").isLength({ min: 10 })
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        const { name, email, phone, message } = req.body;
        const contact = new Contact({
            user: req.user.id,
            name: name,
            email: email,
            phone, phone,
            message: message
        })

        const savedContact = await contact.save();
        res.status(200).json({ success: true, msg: "Contact form submitted successfully", savedContact });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
})

//Route 2: get request to fetch all contact details to admin. Admin Login required
router.get("/fetchcontacts",fetchContacts);
export default router;