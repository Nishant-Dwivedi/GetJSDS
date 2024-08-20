const getjsdsRouter = require("express").Router();
const getDataStructure =
  require("../domain/data-structure-service").getDataStructure;
const errorHandler = require("../utilities/errorHandler").errorHandler;
const cors = require("cors");
const joi = require("joi");

getjsdsRouter.use(cors());

getjsdsRouter.get(
  "/:ds_name",
  dataStructureNameValidationMiddleware,
  async (req, res, next) => {
    const name = req.params.ds_name.toLowerCase();
    try {
      const ds = await getDataStructure(name);
      res.json(ds);
    } catch (error) {
      next(error);
    }
  }
);

getjsdsRouter.use((err, req, res, next) => {
  errorHandler(err, res);
});

function dataStructureNameValidationMiddleware(req, res, next) {
  const schema = joi.string().required().alphanum().min(4).max(14); // not putting this block in a try-catch since express handles syncronous err on its own.
  joi.assert(req.params.ds_name.toLowerCase().replace(" ", ""), schema);
  next();
}

module.exports = { getjsdsRouter };
