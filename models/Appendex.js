const mongoose = require('mongoose')

const Schema = mongoose.Schema;
//Create schema appendix
const appendSchema = new Schema({
    name:           { type: String, required: true },
    sector:         { type: String, required: true },
    industry:       { type: String, required: true },
    availability:   { type: String, required: true },
    country:        { type: String, required: true },
    date:           { type: Date, default: Date.now }

})
module.exports = mongoose.model('appendex', appendSchema)