const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const bodyparser = require("body-parser");
var http = require("http");
var Datastore = require("nedb");
var db = new Datastore({ inMemoryOnly: true });
var ODataServer = require("simple-odata-server");
var Adapter = require("simple-odata-server-nedb");

app.use("/shared", express.static("shared"));
app.use(express.static("resources")); //static index
app.use(express.static("controllers")); //static index
app.use(express.static("styles")); //static index
app.use(express.static("views")); //static index
app.use(bodyparser.json()); // support json encoded bodies
app.use(
  bodyparser.urlencoded({
    extended: false
  })
); // support encoded bodies
app.use("/", router);

const PORT = 8000;

const model = {
  namespace: "movies_nspc",
  entityTypes: {
    movieType: {
      imdb_id: { type: "Edm.String" },
      adult: { type: "Edm.String" },
      belongs_to_collection: { type: "Edm.String" },
      budget: { type: "Edm.Double" },
      genres: { type: "Edm.String" },
      homepage: { type: "Edm.String" },
      original_language: { type: "Edm.String" },
      original_title: { type: "Edm.String" },
      overview: { type: "Edm.String" },
      popularity: { type: "Edm.Float" },
      poster_path: { type: "Edm.String" },
      production_companies: { type: "Edm.String" },
      production_countries: { type: "Edm.String" },
      release_date: { type: "Edm.String" },
      revenue: { type: "Edm.Double" },
      runtime: { type: "Edm.Double" },
      spoken_languages: { type: "Edm.String" },
      status: { type: "Edm.String" },
      tagline: { type: "Edm.String" },
      title: { type: "Edm.String" },  
      video: { type: "Edm.String" },
      vote_average: { type: "Edm.Double" },
      vote_count: { type: "Edm.Double" }
    }
  },
  entitySets: {
    movies: {
      entityType: "movies_nspc.movieType"
    }
  }
};

function insertintodb(data) {
  return new Promise((resolve, reject) => {
    db.insert(data, (err, newdoc) => {
      resolve();
    });
  });
}

async function loadData() {
  const data = await require("./data.json");
  await insertintodb(data);
  return data;
}

let startServer = () => {
  var odataServer = ODataServer(`http://localhost:${PORT}`)
    .model(model)
    .adapter(
      Adapter(function(es, cb) {
        cb(null, db);
      })
    );

  http.createServer(odataServer.handle.bind(odataServer)).listen(PORT);
};

loadData().then(data => {
  startServer(model);
});