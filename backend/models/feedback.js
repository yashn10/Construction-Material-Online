const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    phone: {
        type: Number,
        require: true
    },

    message: {
        type: String,
        require: true
    }

})


const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
