import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import prisma from "../db.js";
import { createAccessToken } from "../libs/accessToken.js";
import { JWT_SECRET } from "../config.js";

const auth = {};

auth.register = async (req, res) => {
  const { username, email, firstName, lastName, age, password } = req.body;
  try {
    const usernameFound = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    if (usernameFound) {
      return res
        .status(401)
        .json({ message: "Nombre de usuario en uso, por favor usa otro" });
    }
    const emailFound = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    if (emailFound) {
      return res
        .status(401)
        .json({ message: "Correo electrónico en uso, por favor usa otro" });
    }
    const hasPassword = await bcrypt.hash(password, 10);
    const userCreated = await prisma.user.create({
      data: {
        username,
        email,
        firstName,
        lastName,
        age,
        password: hasPassword,
      },
    });
    if (!userCreated) {
      return res
        .status(500)
        .json({
          message:
            "Ocurrió un error al intentar registrar, por favor intenta de nuevo",
        });
    } else {
      const token = await createAccessToken({ id: userCreated.id });
      res.cookie("token", token);
      res.status(200).json({
        id: userCreated.id,
        username: userCreated.username,
        email: userCreated.email,
        firstName: userCreated.firstName,
        lastName: userCreated.lastName,
        age: userCreated.age,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

auth.login = async (req, res) => {
    const { email, password } = req.body;
  try {
    const userFound = await prisma.user.findFirst({
        where: {
            email: email,
        }
    });
    if (!userFound) {
        return res.status(401).json({ message: "Correo o contraseña incorrecto/a, por favor intenta de nuevo" })
    } 
    const isFound = await bcrypt.compare(password, userFound.password);
    if (!isFound) {
        return res.status(401).json({ message: "Correo o contraseña incorrecto/a, por favor intenta de nuevo" })
    } else {
        const token = await createAccessToken({ id: userFound.id });
        res.cookie("token", token);
        res.status(200).json({
          id: userFound.id,
          username: userFound.username,
          email: userFound.email,
          firstName: userFound.firstName,
          lastName: userFound.lastName,
          age: userFound.age,
        });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

auth.logout = async (req, res) => {
    try {
      res.cookie("token", "", {
          expires: new Date(0),
      })
      return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

auth.verify = async (req, res) => {
    try {
        const { token } = req.cookies;
      if (!token) {
          return res.status(401).json({ message: "Autorización denegada" })
      } else {
        jwt.verify(token, JWT_SECRET, async (err, user) => {
            if (err) {
                return res.status(401).json({ message: "Autorización denegada" })
            } else {
                const userFound = await prisma.user.findFirst({
                    where: {
                        id: user.id
                    }
                });
                if (!userFound) {
                    return res.status(401).json({ message: "Autorización denegada" })
                } else {
                    res.status(200).json({
                        id: userFound.id,
                        username: userFound.username,
                        email: userFound.email,
                        firstName: userFound.firstName,
                        lastName: userFound.lastName,
                        age: userFound.age,
                    })
                }
            }
        })
      }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default auth;
