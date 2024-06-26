const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerSchema = new mongoose.Schema({

    fullname: {
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

    gender: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    cpassword: {
        type: String,
        require: true
    },

    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]

})

registerSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();

})


registerSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        this.save();
        return token;
    } catch (error) {
        console.log(error, "error");
    }
}


const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
