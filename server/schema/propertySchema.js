import mongoose from "mongoose";
const propertySchema = mongoose.Schema({
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    ownerPhn: {
        type: Number,
        required: true
    },
    propertyName: {
        type: String,
        required: true,
    },
    propertyAge: {
        type: Number,
        default: undefined
    },
    imageUrls: {
        type: Array,
        required: true,
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    parking: {
        type: Boolean,
        required: true
    },
    furnished: {
        type: Boolean,
        required: true
    },
    advertisementType: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const property = mongoose.model("property", propertySchema);

export default property;