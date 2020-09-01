const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account');

const app = express();

const port = 5000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect( config.db, {useNewUrlParser: true} );

mongoose.connection.on('connected', () =>{
    console.log('Successfully connected to DB');
});

mongoose.connection.on('error', (err) => {
    console.log("Failed connection to DB: " + err )
});

app.get('/', (req, res)=> {
    res.send('Main page')
});

app.use('/account', account);

app.listen(port, ()=> console.log('server running on port '+  port));


