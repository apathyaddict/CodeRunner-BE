require ('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoute = require("./Routes/userRoute");
const scoresRoute = require("./Routes/scoresRoute");




//Connect to mongodb
mongoose
  .connect(
    "mongodb+srv://reemcohen:147Aa147@cluster0.4hzi3jx.mongodb.net/Gaming-app"
  )
  .then(() => console.log("connected"));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/signup", userRoute);
app.use("/login", userRoute);
app.use('/scores', scoresRoute);



//Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});
