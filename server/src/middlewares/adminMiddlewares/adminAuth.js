import prisma from "../../db.js";
import { ADMIN_ROLE } from "../../config.js";

export const adminRequired = async (req, res, next) => {
    const userId = req.user.id;
    try {
        const isAdmin = await prisma.userRole.findFirst({
            where: {
                userId: userId,
                role: ADMIN_ROLE,
            },
            include: {
                user: {
                    select: {
                        username: true,
                        email: true,
                    }
                }
            }
        });
        if (!isAdmin) {
            return res.status(401).json({ message: "Autorización denegada" })
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ message: "Autorización denegada" })
    }
}