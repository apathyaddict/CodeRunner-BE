const Scores = require("../Models/scoresModels")


// GET all scores
const getAllScores = async (req, res) => {
  try {
    const allScores = await Scores.find({}).sort({ score: -1 });

    if (allScores.length === 0) {
      return res.status(404).json({ message: "No scores to display" });
    }

    res.status(200).json(allScores);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

//GET SCORE BY ID
const getScoreByID = async (req, res) => {
    const { id } = req.params;
  
    const singleScore = await Scores.findById(id);
  
    if (!singleScore) {
      return res.status(404).json({ error: "Score not found" });
    }
  
    res.status(200).json(singleScore);
  };


// GET user's last score
const getLastScore = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter
  
    try {
      const lastScore = await Scores.findOne({ user: userId })
        .sort({ createdAt: -1 })
        .select("score")
        .exec();
  
      if (!lastScore) {
        return res.status(404).json({ message: "No score found" });
      }
  
      res.status(200).json(lastScore);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };  

// GET user's highest score
const getHighestScore = async (req, res) => {
    const userId = req.params.id; 
    
    try {
      const highestScore = await Scores.findOne({ user: userId })
        .sort({ score: -1 })
        .select("score")
        .exec();
  
      if (!highestScore) {
        return res.status(404).json({ message: "No score found" });
      }
  
      res.status(200).json(highestScore);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };
  
//POST SCORE

const addScore = async (req, res) => {

    const { user, score, nickname } = req.body; 

    try {
      const newScore = new Scores({
        user,
        score, 
        nickname
       });
  
      await newScore.save();
  
      res.status(201).json({ message: "Score added successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };  

  //EDIT SCORE

const editScore = async (req, res) => {

    const { user, score } = req.body; 

    try {

      const newScore = new Scores({
        user,
        score, 
        nickname
       });
  
      await newScore.save();
  
      res.status(201).json({ message: "Score added successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  };  


module.exports = {
  getAllScores,
  getScoreByID, 
  getLastScore, 
  getHighestScore,
  addScore, 
  editScore
};



