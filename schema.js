const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  _id: mongoose.Mixed,
  adult: mongoose.Mixed,
  belongs_to_collection: mongoose.Mixed,
  budget: mongoose.Mixed,
  genres: mongoose.Mixed,
  homepage: mongoose.Mixed,
  imdb_id: mongoose.Mixed,
  original_language: mongoose.Mixed,
  original_title: mongoose.Mixed,
  overview: mongoose.Mixed,
  popularity: mongoose.Mixed,
  poster_path: mongoose.Mixed,
  production_companies: mongoose.Mixed,
  production_countries: mongoose.Mixed,
  release_date: mongoose.Mixed,
  revenue: mongoose.Mixed,
  runtime: mongoose.Mixed,
  splken_languages: mongoose.Mixed,
  status: mongoose.Mixed,
  tagline: mongoose.Mixed,
  title: mongoose.Mixed,
  video: mongoose.Mixed,
  vote_average: mongoose.Mixed,
  vote_count: mongoose.Mixed
});
