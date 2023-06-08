require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoute = require("./Routes/userRoute");
const scoresRoute = require("./Routes/scoresRoute");

//Connect to mongodb
mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => console.log("connected"));

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000','https://code-runner-react-game.vercel.app/']}))
// app.use(cors())


//Routes
app.use("/", userRoute);
app.use("/", scoresRoute);

//Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});
