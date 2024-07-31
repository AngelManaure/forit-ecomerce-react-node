import prisma from "../../db.js";
import { ADMIN_ROLE } from "../../config.js";

const roles = {};

roles.getAll = async (req, res) => {
    try {
        const allRoles = await prisma.userRole.findMany({
            include: {
                user: {
                    select: {
                        username: true,
                        email: true,
                    }
                }
            }
        });
        if (allRoles.length === 0) {
            return res.status(404).json({ message: "No se encontraron usuarios" })
        } else {
            res.status(200).json(allRoles)
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

roles.getOne = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const oneRole = await prisma.userRole.findFirst({
            where: {
                userId: userId,
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
        if (!oneRole) {
            return res.status(404).json({ message: "No se encontró el usuario" })
        } else {
            res.status(200).json(oneRole)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

roles.create = async (req, res) => {
    const { role, userId } = req.body;
    if (!role) {
        return res.status(401).json({ message: "Rol requerido" })
    }
    try {
        const roleCreated = await prisma.userRole.create({
            data: {
                role,
                userId,
            }
        });
        if (!roleCreated) {
            return res.status(500).json({ message: "Ocurrió un error al intentar añadir el rol al usuario, por favor intenta de nuevo" })
        } else {
            res.status(200).json({ message: `Role añadido correctamente al usuario con el id: ${userId}` })
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

roles.delete = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const roleDeleted = await prisma.userRole.delete({
            where: {
                userId,
            }
        });
        if (!roleDeleted) {
            return res.status(500).json({ message: "Ocurrió un error al intentar eliminar el rol del usuario, por favor intenta de nuevo" })
        } else {
            res.status(200).json({ message: "role removido exitosamente" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

roles.verify = async (req, res) => {
    const userId = req.user.id
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
            res.status(201).json([{ message: "Autorización permitida" }, isAdmin])
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export default roles;