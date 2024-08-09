const dataStructureModel = require("../data-access/model").data_structure_model;

async function getDataStructure(dsName) {
  return dataStructureModel
    .findOne({ name: dsName })
    .then((result) => {
      return Promise.resolve(result);
    })
    .catch((e) => {
      return Promise.reject(e);
    });
}

module.exports = {
  getDataStructure,
};
