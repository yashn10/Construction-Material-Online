const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const Contact = require('../models/contact');
const Feedback = require('../models/feedback');
const Paint = require('../models/paint');
const Electrical = require('../models/electrical');
const Furniture = require('../models/furniture');
const Interior = require('../models/interior');
const bcrypt = require('bcryptjs');


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
        return res.status(400).json({ error: "please fill all the fields" });
    }

    try {
        const userExist = await Register.findOne({ email: email });

        if (userExist) {
            return res.status(401).json({ error: "user already exists" });

        } else if (password != cpassword) {
            return res.status(401).json({ error: "passwords are not matching" });

        } else {
            const user = new Register({ fullname, email, phone, gender, password, cpassword });

            const saveuser = await user.save();

            if (saveuser) {
                return res.status(201).json({ message: "User registered successfully" });
            } else {
                return res.status(404).json({ error: "failed to register" });
            }
        }
    } catch (error) {
        console.log("error", error);
    }

});


router.get('/register', async (req, res) => {
    try {
        const user = await Register.find();
        return res.status(201).json(user);
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({ error: "Internal server error" });
    }
})


router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "please fill all the fields" });
    } else {
        try {
            const user = await Register.findOne({ email: email });

            if (user) {
                const isMatch = bcrypt.compare(password, user.password);

                if (isMatch) {
                    const token = await user.generateAuthToken();
                    return res.status(201).json({ token, message: "User login successfully" });
                } else {
                    return res.status(401).json({ error: "invalid credentials" });
                }
            } else {
                res.status(401).json({ error: "invalid credentials" });
            }

        } catch (error) {
            console.log("server side error", error);
        }

    }

});


router.get('/paint', async (req, res) => {
    try {
        const items = await Paint.find();
        res.send(items);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/electrical', async (req, res) => {
    try {
        const items = await Electrical.find();
        res.send(items);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/interior', async (req, res) => {
    try {
        const items = await Interior.find();
        res.send(items);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/furniture', async (req, res) => {
    try {
        const items = await Furniture.find();
        res.send(items);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/paint/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const item = await Paint.findById(_id);
        res.send(item);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/electrical/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const item = await Electrical.findById(_id);
        res.send(item);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/interior/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const item = await Interior.findById(_id);
        res.send(item);
    } catch (error) {
        console.log("error", error);
    }
})


router.get('/furniture/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const item = await Furniture.findById(_id);
        res.send(item);
    } catch (error) {
        console.log("error", error);
    }
})


module.exports = router;
