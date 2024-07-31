import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";

import { FRONT_URL } from "./config.js";

// Rutas Globales(USER)
import authRoutes from "./routes/authRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import productsRoutes from "./routes/productsRoutes.js"
import offersRoutes from "./routes/offersRoutes.js"

// Rutas privadas(ADMIN)
import adminProductsRoutes from "./routes/adminRoutes/adminProductsRoutes.js"
import adminCategoriesRoutes from "./routes/adminRoutes/adminCategoriesRoutes.js"
import adminOfferRoutes from "./routes/adminRoutes/adminOfferRoutes.js"
import adminRolesRoutes from "./routes/adminRoutes/adminRolesRoutes.js"

const app = express();

// Configuraciones

const uploadPath = path.join(process.cwd(), 'productsImages');
app.use('/api/images', express.static(uploadPath));

app.use(cors({
    origin: FRONT_URL,
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Uso rutas Globales(USER)
app.use("/api", authRoutes);
app.use("/api", addressRoutes);
app.use("/api", productsRoutes);
app.use("/api", offersRoutes);

// Uso rutas privadas(admin)
app.use("/api/admin", adminProductsRoutes);
app.use("/api/admin", adminCategoriesRoutes);
app.use("/api/admin", adminOfferRoutes);
app.use("/api/admin", adminRolesRoutes);

export default app;