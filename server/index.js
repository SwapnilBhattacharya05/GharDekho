import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import contactRouter from "./routes/contact.route.js";
import testimonialRouter from "./routes/testimonial.route.js";
import propertyRouter from "./routes/property.route.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//routers
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/property", propertyRouter);
app.use("/api/contact", contactRouter);
app.use("/api/testimonial", testimonialRouter);

//to use static files
app.use("uploads", express.static("upload"));

const PORT = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, () => {
    console.log("Server running on PORT number 8000");
})
