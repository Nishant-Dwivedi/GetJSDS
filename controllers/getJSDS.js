const getjsdsRouter = require("express").Router();
const { alertLogger } = require("../utilities/logger");
const data_structure_model = require("../model/model").data_structure_model;
const errorHandler = require("../utilities/errorHandler").errorHandler;

getjsdsRouter.get("/:ds_name", (req, res, next) => {
  alertLogger(`request received for ${req.params.ds_name}`);
  data_structure_model
    .findOne({ name: req.params.ds_name })
    .then((ds) => {
      ds != null
        ? alertLogger(`${ds.name} fetched successfully from the database.`)
        : alertLogger(`database couldn't find the requested resource.`);
      ds !== null ? res.json(ds) : res.status(404).send(`resource not found.`);
    })
    .catch((e) => {
      next(e);
    });
});

getjsdsRouter.use((err, req, res, next) => {
  errorHandler(err, res);
});

module.exports = { getjsdsRouter };
