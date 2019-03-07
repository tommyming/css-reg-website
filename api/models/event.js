const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    link: String,
    imgSrc: String
}, {collections: 'events'});

module.exports = mongoose.model('EventSchema', eventSchema);