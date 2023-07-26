require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const database_url = process.env.DATABASE_URL;
const port = process.env.PORT;
const routes = require('./routes/route');
const Dbmodel = require('./model/model');
const app = express();
app.use(express.json());
app.use('/api', routes)

mongoose.connect(database_url);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Connected to database');
})


app.listen(port, () => {
    console.log("server is listening to port 3000")
    console.log(database_url)
})

