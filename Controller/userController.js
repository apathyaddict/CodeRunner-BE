const bcrypt = require("bcrypt");
const User = require("../Models/userModels");
const crypto = require("crypto");
const secretKey = crypto.randomBytes(32).toString("hex");

//////////User creation/////////////
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Generate salt
    const salt = await bcrypt.genSalt(10);

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Return the user data
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};
/////////User login/////////
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // // Generate token
    // const token = createToken(user._id);

    // Return the user data
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
};
/////Search users///////
const findUserById = async (res, req) => {
  try {
    const userId = req.params.userId;
    const userScore = req.params.score;
    // Find the user in the database based on the user ID
    const user = await User.findById(userId, userScore);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user data
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
const findAllUser = async (res, req) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  loginUser,
  findUserById,
  findAllUser,
};
