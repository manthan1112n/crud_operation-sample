const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('../routes/product.route.js'); 
const app = express();

app.use(express.json());
app.use('/api/product', productRoutes);

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000');
    });
  })
  .catch(err => console.error('MongoDB error:', err));

module.exports = app;

app.get("/", (req, res) => {
  res.send("API is working!");
});
