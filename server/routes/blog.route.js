import express from "express";
import { body, validationResult } from "express-validator";
import Blog from "../schema/blogSchema.js";
import { getAllBlogs, getBlog } from "../controller/blog.controller.js";
const router = express.Router();

router.post("/postblog", [
    body('title', "Enter title at least of 8 characters").isLength({ min: 8 }),
    body('author', "Author Field Can't be Blank").exists(),
    body('content', "Enter content at least of 100 characters").isLength({ min: 100 }),
    body("image", "Upload at least 1 image").exists()
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    try {
        const blog = await Blog.create(req.body);
        return res.status(200).json({ success: true, blog })
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});


router.get("/getblog/:id",getBlog);
router.get("/getallblogs",getAllBlogs);

export default router;