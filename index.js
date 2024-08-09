const express = require("express");
const { alertLogger } = require("./utilities/logger");
const cors = require("cors");
const getjsdsRouter = require("./entry-points/controller").getjsdsRouter;
const app = express();

app.listen(3000, () => {
  console.log("listening on PORT: 3000");
});
app.use(cors());
app.use("/getjsds", getjsdsRouter);
// handle malformed endpoints
getjsdsRouter.use("*", (req, res) => {
  alertLogger(`request received on an unknown endpoint: ${req.originalUrl}`);
  res.status(400).end();
});
