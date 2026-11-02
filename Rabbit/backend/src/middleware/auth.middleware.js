import dotenv from "dotenv"
dotenv.config()
import jwt from "jsonwebtoken";
import userModel from "../models/user.Model.js";

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Token not provided"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel
            .findById(decoded.id)
            .select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Token verification failed:", error);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};

export default authenticateUser;