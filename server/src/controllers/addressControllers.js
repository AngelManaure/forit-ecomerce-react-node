import prisma from "../db.js";

const address = {};

address.getAll = async (req, res) => {
    const userId = req.user.id;
  try {
    const addressFound = await prisma.address.findMany({
        where: {
            userId: userId,
        }
    });
    if (addressFound.length === 0) {
        return res.status(404).json({ message: "Aún no has añadido ninguna dirección" })
    } else {
        res.status(200).json(addressFound)
    }
} catch (error) {
    res.status(500).json({ message: error.message });
  }
};

address.getOne = async (req, res) => {
    const userId = req.user.id;
    const addressId = parseInt(req.params.id);
  try {
    const addressFound = await prisma.address.findFirst({
        where: {
            id: addressId,
            userId: userId,
        }
    });
    if (!addressFound) {
        return res.status(404).json({ message: "No se encontró ninguna dirección" })
    } else {
        res.status(200).json(addressFound)
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

address.create = async (req, res) => {
    const { addressLine1, addressLine2, city, state, postalCode, country } = req.body;
    const userId = req.user.id;
  try {
    const addressCreated = await prisma.address.create({
        data: {
            userId: userId,
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
        }
    });
    if (!addressCreated) {
        return res.status(500).json({ message: "Ocurrió un error al añadir la dirección, por favor intenta de nuevo" })
    } else {
        res.status(200).json(addressCreated)
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

address.update = async (req, res) => {
    const { addressLine1, addressLine2, city, state, postalCode, country } = req.body;
    const addressId = parseInt(req.params.id);
    const userId = req.user.id;
  try {
    const addressFound = await prisma.address.findFirst({
        where: {
            id: addressId,
            userId: userId,
        }
    });
    if (!addressFound) {
        return res.status(404).json({ message: "Dirección a actualizar no encontrada" })
    }
    const addressUpdated = await prisma.address.update({
        where: {
            id: addressId,
            userId: userId,
        },
        data: {
            addressLine1,
            addressLine2,
            city,
            state,
            postalCode,
            country,
        }
    });
    if (!addressUpdated) {
        return res.status(500).json({ message: "Ocurrió un error al actualizar la dirección, por favor intenta de nuevo" })
    } else {
        res.status(200).json(addressUpdated)
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

address.delete = async (req, res) => {
    const addressId = parseInt(req.params.id);
    const userId = req.user.id;
    try {
        const addressFound = await prisma.address.findFirst({
            where: {
                id: addressId,
                userId: userId,
            }
        });
        if (!addressFound) {
            return res.status(404).json({ message: "Dirección a eliminar no encontrada" })
        }
        const addressDeleted = await prisma.address.delete({
            where: {
                id: addressId,
                userId: userId,
            }
        });
    if (!addressDeleted) {
            return res.status(500).json({ message: "Ocurrió un error al intentar eliminar la dirección, por favor intenta de nuevo" })
        } else {
            res.status(200).json(addressDeleted)
        }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export default address;
