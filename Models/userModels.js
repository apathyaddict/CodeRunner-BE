const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname:{
      type: String,
      required: true,
    },
    //do we need admin?
    isAdmin: {
      type: Boolean,
      default: false,
    },
    scores: [
      {
        score: {
          type: Number,
          required: true,
        },
        time: {
          type: Number,
          timestamps: true,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
