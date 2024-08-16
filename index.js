const express = require("express");
const getjsdsRouter = require("./entry-points/getjsds-route").getjsdsRouter;
const app = express();
require("dotenv").config();
const db_url = `${process.env.DB_URL}`;
const mongoose = require("mongoose");
const logger = require("pino")();
const httpLogger = require("pino-http")();

// The app will be hosted on render.io and it passes a default env var - PORT with a value of 10000
const PORT = process.env.PORT ? process.env.PORT : 3000;
app.listen(PORT, () => {
  logger.info(`server running on PORT: ${PORT}`);
  logger.info("attempting to connect to the database");
});

// make a connection with the database
mongoose
  .connect(db_url, { dbName: "getJSDS" }) //database name
  .then(() => {
    logger.info("successfully connected to the database.");
  })
  .catch((e) => logger.error(e));

app.use(httpLogger); // logging middleware
app.use("/getjsds", getjsdsRouter); // getJSDS router
app.use((req, res) => {
  // malformed endpoints handling middleware
  logger.warn({ req }, "request received at an invalid endpoint.");
  res.status(400).end();
});

// handle uncaught promise rejections
process.on("unhandledRejection", (reason) => {
  logger.fatal(`uncaught promise rejection.`);
  throw reason; // node will log the err to the console and exit with code 1.
});
