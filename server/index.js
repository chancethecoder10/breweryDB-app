const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/beers", async (req, res) => {
  let data;
  res.setHeader("Content-Type", "application/json");
  await axios
    .get(
      `https://sandbox-api.brewerydb.com/v2/beers/?key=${process.env.API_KEY}`
    )
    .then(res => {
      return (data = res.data);
    })
    .catch(err => {
      console.error(err);
      return err;
    });
  res.send({ data });
});

app.set("port", process.env.PORT);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → on localhost:${server.address().port}`);
});
