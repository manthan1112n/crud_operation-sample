const express = require('express');
const router = express.Router();
const Product = require('../models/product.models');
const product={
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controller/product.controller');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
