import Blog from "../schema/blogSchema.js";

export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if(!blog){
            return res.status(400).json({success:false,msg:"Blog Post Not found"});
        }

        return res.status(200).json({success:true,blog});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}

export const getAllBlogs=async(req,res)=>{
    try {
        const blogs = await Blog.find({});

        if(!blogs){
            return res.status(400).json({success:false,msg:"No blog found"});
        }

        return res.status(200).json({success:true,blogs});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Internal Server error");
    }
}