const mongoose = require("mongoose");

const scoresSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },

  user:{
    type:String,
    required: true, 
  }
 
}, {timestamps:true});

const Scores = mongoose.model("Scores", scoresSchema);

module.exports = Scores;
