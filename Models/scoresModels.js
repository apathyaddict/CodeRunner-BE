const mongoose = require("mongoose");

const scoresSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },

  user:{
    type:String,
    required: true, 
  }, 
  nickname:{
    type:String,
    required: false, 
  }
 
}, {timestamps:true});

const Scores = mongoose.model("Scores", scoresSchema);

module.exports = Scores;
