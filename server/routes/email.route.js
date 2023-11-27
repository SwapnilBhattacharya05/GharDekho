import express from "express";
import { sendEmail } from "../controller/email.controller.js";

const router = express.Router();

router.post("/send-email", sendEmail);

export default router;