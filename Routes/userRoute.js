const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");

//Route for create new user
router.post("/singup", userController.createUser);

//Route for login user
router.post("/login", userController.loginUser);

//Route for update user
router.get("/:userId/score", userController.findUserById);

//Route for delete user
router.get("/user", userController.findAllUser);

module.exports = router;
