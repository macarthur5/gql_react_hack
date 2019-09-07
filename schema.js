const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  adult: String,
  belongs_to_collection: String,
  budget: Number,
  genres: String,
  homepage: String,
  imdb_id: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  production_companies: String,
  production_countries: String,
  release_date: String,
  revenue: Number,
  runtime: Number,
  splken_languages: String,
  status: String,
  tagline: String,
  title: String,
  video: String,
  vote_average: Number,
  vote_count: Number
});
