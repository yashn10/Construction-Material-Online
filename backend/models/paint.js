const mongoose = require('mongoose');


const paintSchema = new mongoose.Schema({

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


const Paint = mongoose.model("Paint", paintSchema);

module.exports = Paint;
