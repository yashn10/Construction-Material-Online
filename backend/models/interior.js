const mongoose = require('mongoose');


const interiorSchema = new mongoose.Schema({

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


const Interior = mongoose.model("Interior", interiorSchema);

module.exports = Interior;
