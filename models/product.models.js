const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true,
         trim: true },

    price: { type: Number, 
        required: true, 
        default: 0 },

    description: { type: String, 
        required: true, 
        trim: true },

    Image: { type: String, 
        required: false, },
        
    stockQuantity: { type: Number, 
        required: true, 
        default: 0 }
},
 { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
