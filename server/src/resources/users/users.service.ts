import { FastifyReply, FastifyRequest } from "fastify";
import User from "./users.model";


export async function getAllUsers(req:FastifyRequest, res:FastifyReply) {
    const { email, password } = req.body;
    const user = await User.find({ email });
    
}