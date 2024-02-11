const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Register = require('../models/register');
const Contact = require('../models/contact');
const Feedback = require('../models/feedback');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


const middleware = (req, res, next) => {
    console.log("hello middleware");
    next();
};


router.post('/feedback', async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(422).json({ error: "please fill all the fields" });
    } else {
        const user = new Feedback({ name, email, phone, message });

        const saveuser = await user.save();

        if (saveuser) {
            return res.status(201).json({ message: "feedback saved successfully" });
        } else {
            return res.status(500).json({ error: "feedback error" });
        }
    }
});


router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(422).json({ error: "please fill all the fields properly" });
    } else {
        const user = new Contact({ name, email, message });

        const saveuser = await user.save();

        if (saveuser) {
            return res.status(201).json({ message: "details send successfully" });
            console.log(req.body);
        } else {
            return res.status(500).json({ error: "failed to send details" });
        }
    }
});


router.post('/register', async (req, res) => {
    const { fullname, email, phone, gender, password, cpassword } = req.body;

    if (!fullname || !email || !phone || !gender || !password || !cpassword) {
        return res.status(422).json({ error: "please fill all the fields" });
    }

    try {
        const userExist = await Register.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "user already exists" });

        } else if (password != cpassword) {
            return res.status(422).json({ error: "password are not matching" });

        } else {
            const user = new Register({ fullname, email, phone, gender, password, cpassword });

            const saveuser = await user.save();

            if (saveuser) {
                return res.status(201).json({ message: "User registered successfully" });
                console.log(req.body);
            } else {
                return res.status(500).json({ error: "failed to register" });
            }
        }
    } catch (error) {
        console.log("error", error);
    }

});


router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "please fill all the fields" });
    }

    try {

        const user = await Register.findOne({ email: email });

        if (user) {

            const isMatch = bcrypt.compare(password, user.password);

            const token = await user.generateAuthToken();
            console.log(token);

            if (isMatch) {
                res.status(201).json({ error: "user signin successfully" });
            } else {
                res.status(400).json({ error: "invalid credentials" });
            }

        } else {
            res.status(400).json({ error: "invalid credentials" });
        }


    } catch (error) {
        console.log(error);
    }

});


module.exports = router;
