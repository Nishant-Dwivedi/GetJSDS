const dataStructureModel =
  require("../data-access/data-structure-model").data_structure_model;
const AppError = require("../utilities/AppError").AppError;

async function getDataStructure(dsName) {
  return dataStructureModel
    .findOne({ name: dsName }, { _id: 0 }) // modifies the returned document to not have the default object id
    .then((result) => {
      if (result === null) {
        throw new AppError(
          404,
          `the requested resource does not exist in the database`
        );
      }
      return Promise.resolve(result);
    })
    .catch((e) => {
      return Promise.reject(e);
    });
}

module.exports = {
  getDataStructure,
};
