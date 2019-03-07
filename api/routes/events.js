const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');

const EventSchema = require('../models/event');

router.get('/', (req, res, next) => {
    EventSchema.find().then(event => {res.json(event);console.log(event);});
})

router.post('/upload', (req, res, next) => {
    const event = new EventSchema({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.eventName,
        link: req.body.addEventURL,
        imgSrc: `../src/img/event/${req.files.eventImageInput.name}`
    });

    event.save()
        .then(result => console.log(result))
        .catch(err => console.log(err));
    if(req.files.eventImageInput){
        var file = req.files.eventImageInput;
        var uploadpath = path.resolve(__dirname + '/../../dist/src/img/event/' + file.name);

        file.mv(uploadpath,function(err){
            if(err){
                console.log("File Upload Failed",file.name,err);
                res.send("Error Occured!");
            }
            else {
                console.log("File Uploaded",file.name);
                res.send('Done! Uploading files');
            }
        });
    }
    else {
        res.send("No File selected !");
        res.end();
    };
})

module.exports = router;