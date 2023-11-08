import Testimonial from "../schema/testimonialSchema.js";

export const getTestimonials = async (req, res) => {
    try {
        const testimonial=await Testimonial.find({});
        res.status(200).json(testimonial);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}