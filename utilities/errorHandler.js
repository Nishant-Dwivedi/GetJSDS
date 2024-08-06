const { errorLogger } = require("../utilities/logger");

function errorHandler(error, response) {
  errorLogger(error);
  response.status(500).end();
}

module.exports = { errorHandler };
