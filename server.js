const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema");
const app = express();
const PORT = 7500;

const MONGO_DB = "gqldb";
const COLLECTION_NAME = "movies";
const url = `mongodb://localhost:27017/${MONGO_DB}`;
mongoose.connect(url, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));

let openDb = () => {
  return new Promise((resolve, reject) => {
    db.once("open", function() {
      console.log("Successfully connected to MongoDB.");
      resolve(mongoose.model(`${COLLECTION_NAME}`, schema));
    });
  });
};

openDb().then(movies => {
  movies.find({ original_title: "Jurassic World" }, function(error, comments) {
    console.log(comments);
    // Display the comments returned by MongoDB, if any were found.
    // Executes after the query is complete.
  });
});

//=================================================================================//

app.get("/", (req, res) => {
  res.json({
    msg: "GraphQL API"
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
