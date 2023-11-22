import Property from "../schema/propertySchema.js";
import User from "../schema/userSchema.js";

export const getMyProperty = async (req, res) => {
    if (req.params.id !== req.user.id) {
        return res.status(401).json({ success: false, msg: "You're Not Allowed to access data of another user" });
    }

    try {
        const property = await Property.find({ userRef: req.params.id });
        return res.status(200).json({ success: true, property });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id)

        if (!property) {
            return res.status(404).send("Property Not Found");
        }

        if (req.user.id !== property.userRef.toString()) {
            return res.status(401).send("You can only delete your own properties");
        }

        await Property.findByIdAndDelete(req.params.id);
        return res.status(200).json({ success: true, msg: "Property Has Been Deleted" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const updateProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).send("Property Not Found");
        }

        if (req.user.id !== property.userRef.toString()) {
            return res.status(401).send("You can only update your own properties");
        }

        const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ success: true, updatedProperty, msg: "Property Has Been Updated" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const getProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).send("Property Not Found");
        }

        return res.status(200).json({ success: true, property });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const getOwnerAvatar = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({ msg: "Property Not Found", success: false });
        }

        const user = await User.findById(property.userRef);

        if (!user) {
            return res.status(404).json({ msg: "User Not Found", success: false });
        }
        return res.status(200).json({ success: true, photo: user.photo })

    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const getAllRents = async (req, res) => {
    try {
        const rents = await Property.find({ advertisementType: "rent" });

        if (!rents) {
            return res.status(404).send("Rent Property Not Found");
        }

        return res.status(200).json({ success: true, rents });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const getAllSells = async (req, res) => {
    try {
        const sells = await Property.find({ advertisementType: "sell" });

        if (!sells) {
            return res.status(404).send("Sell Property Not Found");
        }

        return res.status(200).json({ success: true, sells });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}