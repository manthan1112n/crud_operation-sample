const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route.js'); 
const app = express();

app.use(express.json());
app.use('/api/product', productRoutes);

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(3001, () => {
      console.log('Server running at http://localhost:3001');
    });
  })
  .catch(err => console.error('MongoDB error:', err));