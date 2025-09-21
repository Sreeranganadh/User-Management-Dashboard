const connectDb = require("./config/config");
require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors=require ("cors");
connectDb();

const app = express();

app.use(express.json());
app.use(cors())

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;


app.listen(3000, () => {
  console.log("Server is running in PORT: 3000");
});
