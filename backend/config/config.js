const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://sreeRanganadh:UykfCaW2HTrfiKZF@cluster0.k0iajtc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting DB: ", error.message);
  }
};

module.exports = connectDb;
