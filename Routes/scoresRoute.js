const express = require("express");
const router = express.Router();
const scoreController = require("../Controller/scoresController");



router.get("/scores/:id", scoreController.getScoreByID);

router.get("/scores", scoreController.getAllScores);

router.get("/scores/last/:id", scoreController.getLastScore);

router.get('/scores/high/:id', scoreController.getHighestScore);

router.post('/scores', scoreController.addScore);

module.exports = router;
