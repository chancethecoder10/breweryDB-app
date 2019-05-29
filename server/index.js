import express from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import fetch from "node-fetch";
require("dotenv").config();

/* My express App */
exports.handler = (event, context, callback) => {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Apply express middlewares
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  // Set router base path for local dev
  const routerBasePath = `/.netlify/functions`;

  /* define routes */
  router.get("/", (req, res) =>
    res.send({ statusCode: 200, body: { message: "invalid route" } })
  );

  router.get("/beers", async () => {
    try {
      const res = await fetch(
        `https://sandbox-api.brewerydb.com/v2/beers/?key=${process.env.API_KEY}`
      );

      if (res.status !== 200) {
        return { statusCode: res.status, body: res.statusText };
      }

      const data = await res.json();

      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
    } catch (err) {
      console.log(err); // output to netlify function log
      return {
        statusCode: 500,
        body: err.message
      };
    }
  });

  // Setup routes
  app.use(router);

  return serverless(app);
};
