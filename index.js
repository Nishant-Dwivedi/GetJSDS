const express = require("express");
const cors = require("cors");
const getjsdsRouter = require("./controllers/getJSDS").getjsdsRouter;
const app = express();

app.listen(3000, () => {
  console.log("listening on PORT: 3000");
});
app.use(cors());
app.use("/getjsds", getjsdsRouter);
