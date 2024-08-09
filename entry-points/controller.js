const getjsdsRouter = require("express").Router();
const getDataStructure = require("../domain/domain").getDataStructure;
const { alertLogger } = require("../utilities/logger");
const errorHandler = require("../utilities/errorHandler").errorHandler;

getjsdsRouter.get("/:ds_name", async (req, res, next) => {
  const name = req.params.ds_name;
  alertLogger(`request received for ${name}`);
  try {
    ds = await getDataStructure(name);
    if (ds !== null) {
      alertLogger(`${ds.name} fetched successfully.`);
      res.json(ds);
    } else {
      alertLogger(
        `the requested resource: ${name} wasn't found in the database.`
      );
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

getjsdsRouter.use((err, req, res, next) => {
  errorHandler(err, res);
});

module.exports = { getjsdsRouter };
