const mongoose = require("mongoose");

const MONGO_USERNAME = "macarthur";
const MONGO_PASSWORD = "Martand5#";
const MONGO_HOSTNAME = "127.0.0.1";
const MONGO_PORT = "27017";
const MONGO_DB = "myspacedatabase";

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, { useNewUrlParser: true, useFindAndModify: false });

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
});
