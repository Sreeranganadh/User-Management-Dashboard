const mongoose = require("mongoose");
require("dotenv").config();


const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting DB: ", error.message);
  }
};

module.exports = connectDb;
