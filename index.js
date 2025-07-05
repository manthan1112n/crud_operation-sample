const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route.js'); 
const app = express();

app.use(express.json());
app.use('/api/product', productRoutes); 


mongoose.connect('mongodb+srv://manthannaware1:0YiynemL7w9XoSWI@crud.nogy9mg.mongodb.net/products?retryWrites=true&w=majority&appName=crud', {
})
.then(() => {
  console.log(' Connected to MongoDB Atlas');
  app.listen(3001, () => {
    console.log(' Server running at http://localhost:3001');
  });
})
.catch(err => {
  console.error(' MongoDB connection failed:', err.message);
});
