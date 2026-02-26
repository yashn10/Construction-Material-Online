const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });
const app = express();
const cors = require('cors');
const PORT = process.env.PORT;

require('./db/db');

app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));


app.listen(PORT, () => {
    console.log("server running at port number", PORT);
});