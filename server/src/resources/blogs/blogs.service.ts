import Blog from './blogs.model';
import { Request, Response, NextFunction } from 'express';


export async function getAllBlogs(req: Request, res: Response, next:NextFunction) {
    try{
        const blogs = await Blog.find({});
        res.send(blogs);
    } catch(err){
        next(err)
    }
}

export async function getBlogById(req: Request, res: Response, next:NextFunction) {
    try{
        const {id} = req.params;
        const blog = await Blog.findById(id);
        res.send(blog);
    } catch(err){
        next(err)
    }
}

export async function updateBlog(req: Request, res: Response, next:NextFunction) {
    try{
        const {id} = req.params;
        const blog = await Blog.findById(id);
        res.send(blog);
    } catch(err){
        next(err)
    }
}
export async function createBlog(req: Request, res: Response, next:NextFunction) {
    try{
        const {id} = req.params;
        const blog = await Blog.findById(id);
        res.send(blog);
    } catch(err){
        next(err)
    }
}

export async function removeBlog(req: Request, res: Response, next:NextFunction) {
    try{
        const {id} = req.params;
        const blog = await Blog.findById(id);
        res.send(blog);
    } catch(err){
        next(err)
    }
}