const express = require('express')
//data base schema appendix
const AppendexDb = require('../../models/Appendex')
//validation
const validateAppendixInput = require('../../validation/appendix');

const router = express.Router()

//post data 
router.post('/add', async (req, res) => {
   //validation 
   const { errors, isValid } = validateAppendixInput(req.body)
   //validation 
   if (!isValid) {
       return res.status(400).json(errors);
   }
   // Create a object
    const append = new AppendexDb({
        name:           req.body.name,
        sector:         req.body.sector,
        industry:       req.body.industry,
        availability:   req.body.availability,
        country:        req.body.country
    })
   await append
            .save()
            .then(app => res.status(200).json(app))
            .then(() => console.log('\n ============ appendex1 data successfully inserted ============\n' + append))
            .catch(err => console.log(err))
})

//get list of data
router.get('/list', async (req, res) => {
   await AppendexDb
            .find()
            .then((app) => res.json(app))
            .catch(err => console.log(err))
})

//get industry filter 
router.get('/industry/search/', async (req, res) => {
    await AppendexDb
             .find({}, {name: 1, industry: 1})
             .then((app) => res.json(app))
             .catch(err => console.log(err))
 })
//get sector filter 
 router.get('/sector/search', async (req, res) => {    
    await AppendexDb
             .find({}, {sector: 1})
             .then((app) => res.json(app))
             .catch(err => console.log(err))
 })
 //get availability filter 
 router.get('/availability/search', async (req, res) => {    
    await AppendexDb
             .find({}, {availability: 1})
             .then((app) => res.json(app))
             .catch(err => console.log(err))
 })
  //get country filter 
 router.get('/country/search', async (req, res) => {    
    await AppendexDb
             .find({}, {country: 1})
             .then((app) => res.json(app))
             .catch(err => console.log(err))
 })
module.exports = router;