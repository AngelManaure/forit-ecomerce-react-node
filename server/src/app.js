import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { FRONT_URL } from "./config.js";

// Links a las rutas
import authRoutes from "./routes/authRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import productsRoutes from "./routes/productsRoutes.js"

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
app.use("/api", addressRoutes);
app.use("/api", productsRoutes);

export default app;