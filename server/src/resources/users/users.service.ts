import { Request, Response, NextFunction } from "express";
import User from "./users.model";


export async function getAllUsers(req:Request, res:Response) {
    const users = await User.find({});
    res.send(users);
}