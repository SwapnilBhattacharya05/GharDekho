import User from "../schema/userSchema.js";
import bcrypt from "bcrypt";

export const getUser = async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.user.id });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users) {
            return res.send("No user found");
        }

        return res.status(200).json({ users });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const updateUser = async (req, res) => {
    try {
        if (req.user.id !== req.params.id) {
            return res.status(401).json({ success: false, msg: "You can only update your account" });
        }

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(req.user.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
                photo: req.body.photo,
            }
        }, { new: true });

        return res.status(200).json({ success: true, msg: "User updated successfully", updatedUser });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const deleteUser = async (req, res) => {
    try {
        if (req.user.id !== req.params.id) {
            return res.status(401).json({ success: false, msg: "You can only Delete your account" });
        }

        await User.findByIdAndDelete(req.user.id);
        return res.status(200).json({ success: true, msg: "User has been deleted" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}