import express from "express";
import { body, validationResult } from "express-validator";
import Testimonial from "../schema/testimonialSchema.js";
import {getTestimonials} from "../controller/testimonial.controller.js";
const router = express.Router();

//Route 1: post request to add a testimonail.
router.post("/addtestimonial", [
    body("quotes", "Enter a quote of at least 10 characters").isLength({ min: 10 }),
    body("name", "Enter your name").isLength({ min: 3 }),
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        const { quotes, name, image } = req.body;
        const testimonial = new Testimonial({ quotes, name, image });
        const savedTestimonialt = await testimonial.save();
        res.status(200).json({ msg: "Testimonial has been added successfully", savedTestimonialt });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});

router.get("/fetchtestimonials",getTestimonials);

export default router;