const mongoose = require('mongoose');


const electricalSchema = new mongoose.Schema({

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


const Electrical = mongoose.model("Electrical", electricalSchema);

module.exports = Electrical;
