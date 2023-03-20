
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CandidateModel = require('./models/Candidate');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://candidates:candidates@cluster1.g7hmzdc.mongodb.net/candidatesDatabase?retryWrites=true&w=majority"
);

app.get("/getCandidates", async (req, res) => {
  try {
    const result = await CandidateModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

app.post("/createCandidate", async (req, res) => {
  const candidate = req.body
  const newCandidate = new CandidateModel(candidate);
  await newCandidate.save();

  res.json(candidate);
})

app.listen(3003, () => {
  console.log("Server is running on port 3003");
})