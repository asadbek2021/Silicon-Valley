import { Router } from "express";
import { createBlog, getAllBlogs, getBlogById, removeBlog, updateBlog } from "./blogs.service";


const router = Router();

router.get("/", getAllBlogs)
router.get("/:id", getBlogById)
router.post("/", createBlog)
router.put("/:id", updateBlog)
router.delete("/:id", removeBlog)

export default router;