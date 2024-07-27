import prisma from "../../db.js";

const adminCategories = {};

adminCategories.getAll = async (req, res) => {
  try {
    const allCategories = await prisma.category.findMany({
      include: {
        offers: true,
      },
    });
    if (allCategories.length === 0) {
      return res.status(404).json({ message: "No se encontraron categorias" });
    } else {
      res.status(200).json(allCategories);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

adminCategories.getOne = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  try {
    const oneCategory = await prisma.category.findFirst({
      where: {
        id: categoryId,
      },
      include: {
        offers: true,
      },
    });
    if (!oneCategory) {
      return res.status(404).json({ message: "No se encontró la categoría" });
    } else {
      res.status(200).json(oneCategory);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

adminCategories.create = async (req, res) => {
  const { name } = req.body;
  try {
    const categoryFound = await prisma.category.findFirst({
      where: {
        name,
      },
    });
    if (categoryFound) {
      return res.status(401).json({ message: "Esta categoría ya existe" });
    }
    const categoryCreate = await prisma.category.create({
      data: {
        name,
      },
    });
    if (!categoryCreate) {
      return res.status(500).json({
        message:
          "Ocurrió un error al añadir la categoría, por favor intenta de nuevo",
      });
    } else {
      res.status(200).json(categoryCreate);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

adminCategories.update = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  const { name } = req.body;
  try {
    const categoryFound = await prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });
    if (!categoryId) {
      return res
        .status(404)
        .json({ message: "No se encontró la categoría a actualizar" });
    }
    const categorieUpdated = await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name,
      },
    });
    if (!categorieUpdated) {
      return res.status(500).json({
        message:
          "Ocurrió un error al actualizar la categoría, por favor intenta de nuevo",
      });
    } else {
      res.status(200).json(categorieUpdated);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

adminCategories.delete = async (req, res) => {
  const categoryId = parseInt(req.params.id);
  try {
    const categoryFound = await prisma.category.findFirst({
      where: {
        id: categoryId,
      },
    });
    if (!categoryFound) {
      return res
        .status(404)
        .json({ message: "No se encontró la categoría a eliminar" });
    }
    const categoryDeleted = await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
    if (!categoryDeleted) {
      return res.status(500).json({
        message:
          "Ocurrió un error al intentar eliminar la categoría, por favor intenta de nuevo",
      });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default adminCategories;
