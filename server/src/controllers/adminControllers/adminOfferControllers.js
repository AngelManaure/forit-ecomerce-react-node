import prisma from "../../db.js";

const offer = {};

offer.getAll = async (req, res) => {
    try {
        const offers = await prisma.offer.findMany({
            include: {
                applicableToCategories: true, // Incluye las categorías asociadas
              },
        })
        if (offers.length === 0) {
            return res.status(404).json({ message: "No se encontró ninguna oferta" })
        } else {
            res.status(200).json(offers)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

offer.getOne = async (req, res) => {
    const offerId = parseInt(req.params.id);
    try {
        const Oneoffer = await prisma.offer.findFirst({
            where: {
                id: offerId,
            },
            include: {
                applicableToCategories: true, // Incluye las categorías asociadas
              },
        });
        if (!Oneoffer) {
            return res.status(404).json({ message: "No se encontró la oferta" })
        } else {
            res.status(200).json(Oneoffer)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

offer.create = async (req, res) => {
    const { title, description, discountType, discountValue, startDate, endDate, minOrderAmount, applicableToCategories } = req.body;
    try {
        const newOffer = await prisma.offer.create({
            data: {
              title,
              description,
              discountType,
              discountValue,
              startDate: new Date(startDate),
              endDate: new Date(endDate),
              minOrderAmount: minOrderAmount || null,
              applicableToCategories: {
                connect: applicableToCategories.map((categoryId) => ({ id: categoryId })),
              },
            },
          });
          if (!newOffer) {
            return res.status(500).json({ message: "Ocurrió un error al crear la categoría, por favor intenta de nuevo" })
          } else {
            res.status(200).json(newOffer);
          }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

offer.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, discountType, discountValue, startDate, endDate, minOrderAmount, applicableToCategories } = req.body;
    
        const updatedOffer = await prisma.offer.update({
          where: { id: parseInt(id) },
          data: {
            title,
            description,
            discountType,
            discountValue,
            startDate: startDate ? new Date(startDate) : undefined,
            endDate: endDate ? new Date(endDate) : undefined,
            minOrderAmount: minOrderAmount || null,
            applicableToCategories: {
              set: applicableToCategories.map((categoryId) => ({ id: categoryId })),
            },
          },
        });
        if (!updatedOffer) {
            return res.status(500).json({ message: "Oferta a actualizar no encontrada" })
        } else {
            res.status(200).json(updatedOffer)
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

offer.delete = async (req, res) => {
    const offerId = parseInt(req.params.id);
    try {
        const offerDeleted = await prisma.offer.delete({
            where: {
                id: offerId,
            }
        });
        if (!offerDeleted) {
            return res.status(404).json({ message: "Oferta a eliminar no encontrada" })
        } else {
            res.sendStatus(204)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default offer;