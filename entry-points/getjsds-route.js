const getjsdsRouter = require("express").Router();
const getDataStructure =
  require("../domain/data-structure-service").getDataStructure;
const errorHandler = require("../utilities/errorHandler").errorHandler;
const cors = require("cors");

getjsdsRouter.use(cors());

getjsdsRouter.get("/:ds_name", async (req, res, next) => {
  const name = req.params.ds_name;
  try {
    const ds = await getDataStructure(name);
    res.json(ds);
  } catch (error) {
    next(error);
  }
});

getjsdsRouter.use((err, req, res, next) => {
  errorHandler(err, res);
});

module.exports = { getjsdsRouter };
