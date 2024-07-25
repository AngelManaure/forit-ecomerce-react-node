import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "Autorización denegada" })
    }
    try {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({ message: "Autorización denegada" })
            } else {
                req.user = user
                next();
            }
        })
    } catch (error) {
        return res.status(401).json({ message: "Autorización denegada" })
    }
}