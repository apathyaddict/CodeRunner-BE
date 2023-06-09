const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

//Route for create new user
router.post("/signup", userController.createUser);

//Route for login user
router.post("/login", userController.loginUser);

//Route for find one user
router.get("/user/:userId", userController.findUserById);

//Route for find one user
router.put("/user/:id", userController.updateUser);

//Route for find all user
router.get("/user", userController.findAllUser);

module.exports = router;
