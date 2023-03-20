const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const CandidateModel = mongoose.model("candidates", CandidateSchema)
module.exports = CandidateModel;