const express = require("express");
const router = express.Router();
const scoresController = require("../Controller/scoresController");



router.get("/scores/:id", scoresController.getScoreByID);

router.get("/scores", scoresController.getAllScores);

router.get("/scores/last/:id", scoresController.getLastScore);

router.get('/scores/high/:id', scoresController.getHighestScore);

router.post('/scores', scoresController.addScore);


router.put('/scores', scoresController.editScore);

module.exports = router;
