const mongoose = require('mongoose');


const furnitureSchema = new mongoose.Schema({

    image: {
        type: String,
        require: true
    },

    title: {
        type: String,
        require: true
    },

    price: {
        type: Number,
        require: true
    },

    description: {
        type: String,
        require: true
    }

})


const Furniture = mongoose.model("Furniture", furnitureSchema);

module.exports = Furniture;
