const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.listen(3333);
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect("mongodb://localhost:27017/repo_aula_bd", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});