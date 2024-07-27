import prisma from "../db.js";

const products = {};

products.getAll = async (req, res) => {
    try {
        const allProducts = await prisma.products.findMany({
            include: {
                author: true,
            }
        });
        if (allProducts.length === 0) {
            return res.status(404).json({ message: "No se encontraron los productos" })
        } else {
            res.status(200).json(allProducts)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

products.getOne = async (req, res) => {
    const productId = parseInt(req.params.id);
  
    try {
      const product = await prisma.products.findFirst({
        where: {
          id: productId
        },
        include: {
          category: true,
          author: true,
          productComments: true,
          orderItems: true,
          reviews: true
        }
      });
  
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el producto' });
    }
  };

products.getCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany({
            include: {
                offers: true
            }
        });
        if (!categories) {
            return res.status(500).json({ message: "Ocurrió un error al buscar las categorías, por favor intenta de nuevo" })
        } else {
            res.status(200).json(categories)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}

products.create = async (req, res) => {
    const { title, description, categoryName, price, stock, categoryId } = req.body;
    if (!req.file) {
        return res.status(401).json({ message: "No puedes añadir un producto sin una imagen" })
    }
    const imageURL = `http://localhost:3000/api/images/${req.file.filename}`;
    try {
        const product = await prisma.products.create({
            data: {
                title,
                description,
                price,
                stock,
                image: imageURL,
                categoryId: categoryId,
            }
        });
        if (!product) {
            return res.status(500).json({ message: "Ocurrió un error al intentar añadir el producto, por favor intenta de nuevo" })
        } else {
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

products.addCategory = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// products.update = async (req, res) => {
//     const productId = parseInt(req.params.id);
//     const { title, description, categoryName, price, stock, } = req.body;
    
//     try {
        
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

products.delete = async (req, res) => {
    const productId = parseInt(req.params.id);
    try {
        const productFound = await prisma.products.findFirst({
            where: {
                id: productId,
            }
        });
        if (!productFound) {
            return res.status(404).json({ message: "No se encontró el producto" })
        }
        const productDeleted = await prisma.products.delete({
            where: {
                id: productId,
            }
        });
        if (!productDeleted) {
            return res.status(500).json({ message: "Ocurrió un errror al intentar eliminar el producto, por favor intenta de nuevo" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

products.category = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    try {
        const products = await prisma.products.findFirst({
          where: {
            categoryId: categoryId
          },
          include: {
            category: true,
            author: true,
            productComments: true,
            reviews: true
          }
        });
    
        res.json(products);
      } catch (error) {
        res.status(500).json({ message: error.message })
      }
}

export default products;