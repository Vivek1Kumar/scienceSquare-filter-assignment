const express = require('express')

const router = express.Router()
const Contactus = require('../../models/ContactUs')
const validateContactUsInput = require('../../validation/contactus');

// route POST api/contactus
// access Public
router.post('/contactus', async (req, res) => {
    
    //validation 
    const { errors, isValid } = validateContactUsInput(req.body)
    //validation 
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Create a object
    const contactus = new Contactus({
        name:       req.body.name,
        address:    req.body.address,
        mobileno:   req.body.mobileno,
        appendix:   req.body.appendix
    })
    await contactus
            .save()
            .then(cont => res.status(200).json(cont))
            .then(() => { console.log('\n-------->>>>>>>>>>Contactus data Inserted<<<<<<<<<<--------\n' + contactus)} )
            .catch(err => { console.log(err)} )
})

// route GET api/contactus/list
// access Public
router.get('/contactus/list', (req, res) => {
    Threads
        .find({ user: req.user.id })
        .sort({date: '-1'})
        .then(thread => res.json(thread))
        .catch(err => console.log(err))
})


module.exports = router;