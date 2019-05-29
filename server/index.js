import express from "express";
import serverless from "serverless-http";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";

/* My express App */
const app = express();
const router = express.Router();

// Apply express middlewares
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// gzip responses
router.use(compression());

/* define routes */
router.get("/", (req, res) => {
  res.send({ statusCode: 400, body: "there's nothing here" });
});

router.get("/beers", (req, res) => {
  res.redirect("/api");
});

// Setup routes
app.use("/", router);

export default serverless(app);
