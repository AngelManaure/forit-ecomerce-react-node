import dotenv from "dotenv/config";

export const PORT = process.env.PORT || 5000;

export const JWT_SECRET = process.env.JWT_SECRET || "textosecreto";

export const FRONT_URL = process.env.FRONT_URL || "http://localhost:5173";

export const USER_ROLE = process.env.USER_ROLE;

export const ADMIN_ROLE = process.env.ADMIN_ROLE;