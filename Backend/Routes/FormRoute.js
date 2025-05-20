const express = require('express');
const router = express.Router(); 
const formModel = require('../Models/FormContact_Schema.js');


router.post("/contactForm/", async (req, res) => {
    try {
        
        console.log(req.body);
        const newContact = new formModel(req.body);
        await newContact.save();
        res.status(200).send(newContact);
    } catch (err) {
        res.status(500).send("Contact not saved: " + err);
    }
});

module.exports = router;




