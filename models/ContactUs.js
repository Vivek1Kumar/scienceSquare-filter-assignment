const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema contactus
const PostSchema = new Schema({
  name:       { type: String, required: true },
  address:    { type: String, required: true },
  mobileno:   { type: String, required: true },
  appendix:   { type: String, required: true },
  date:       { type: Date,   default: Date.now }
});

module.exports = Post = mongoose.model('contactus', PostSchema);
