import { Product } from "../models/Product.js";

export async function getProducts(req, res) {
  try {
    const products = await Product.findAll({
      atributes: ["id", "code", "name", "price", "quantity"],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProduct(req, res) {
  const { code, name, price, quantity } = req.body;
  try {
    let newProduct = await Product.create(
      {
        code,
        name,
        price,
        quantity,
      },
      {
        fields: ["code", "name", "price", "quantity"],
      }
    );
    return res.json(newProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { code, name, price, quantity } = req.body;

    const product = await Product.findByPk(id);
    product.code = code;
    product.name = name;
    product.price = price;
    product.quantity = quantity;
    await product.save();

    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await Product.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
