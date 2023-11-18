import Contact from "../schema/contactSchema.js";

export const fetchContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        if (!contacts) {
            return res.status(400).send("No contact data found");
        }

        return res.status(200).json({ contacts });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}