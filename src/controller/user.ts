import { User } from "../models/User"
import { Request, Response } from "express";

export const userController = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username, password);
    try {
        const newUser = await User.create({ username, password });
        console.log("Created user:", newUser);
    } catch (err) {
        console.error("Failed to create user:", err);
    }
    res.json({
        msg: "signup"
    })
}