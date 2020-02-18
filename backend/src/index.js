const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

mongoose.connect("mongodb://localhost:27017/class", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});