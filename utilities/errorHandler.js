const { errorLogger } = require("../utilities/logger");

function errorHandler(error, response) {
  errorLogger(error);
  response.status(500).send({ error: "internal server error" });
}

module.exports = { errorHandler };
