const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const upload = require('express-fileupload');

const app = express();

const eventsRoutes = require('./api/routes/events');

http.createServer(app).listen(80);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/events');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(upload());

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

const PORT = process.env.PORT || 800;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



