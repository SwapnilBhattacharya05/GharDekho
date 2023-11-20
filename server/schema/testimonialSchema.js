import mongoose from "mongoose";
const testimonialSchema = mongoose.Schema({
    quotes: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Testimonial = mongoose.model("testimonial", testimonialSchema);
export default Testimonial;