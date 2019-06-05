const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const upload = require('express-fileupload');
const fs = require('fs');

const app = express();

const eventsRoutes = require('./api/routes/events');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/events');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(upload());

app.use(express.static(__dirname, { dotfiles: 'allow' } ));

//Routes
app.use('/events', eventsRoutes);

/*When Error
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});
/*app.use((error, req, res, next) => {
    res.status(error.status || 500);
    console.log('Error: ', error.message)
})*/

app.use(express.static("dist"));

const port = process.env.PORT || 3000;
app.listen(port);
