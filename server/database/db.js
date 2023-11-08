import mongoose from "mongoose";

const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.lqgnrhc.mongodb.net/ghardekho?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("DB connection successful");
    } catch (e) {
        console.log("Connection error with database", e);
    }
}

export default connection;