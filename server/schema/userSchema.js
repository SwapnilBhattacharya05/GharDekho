import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "property",
        default: [],
    }],
    photo: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const User = mongoose.model("user", userSchema);

export default User;