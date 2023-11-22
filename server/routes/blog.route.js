import express from "express";
import { body, validationResult } from "express-validator";
import Blog from "../schema/blogSchema.js";
import { deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controller/blog.controller.js";
const router = express.Router();

router.post("/postblog", [
    body('title', "Title must be of at least 8 characters and at most 50 characters").isLength({ min: 8, max: 50 }),
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
        return res.status(200).json({ success: true, blog, msg: "Blog posted successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
});


router.get("/getblog/:id", getBlog);
router.delete("/deleteblog/:id",deleteBlog);
router.put("/updateblog/:id",updateBlog);
router.get("/getallblogs", getAllBlogs);

export default router;