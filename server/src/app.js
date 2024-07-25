import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { FRONT_URL } from "./config.js";
import authRoutes from "./routes/authRoutes.js"

const app = express();

// Configuraciones

app.use(cors({
    origin: FRONT_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Rutas
app.use("/api", authRoutes);

export default app;