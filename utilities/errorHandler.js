const logger = require("pino")();

function errorHandler(error, response) {
  logger.error(error);
  if (error.httpStatusCode == 404) {
    response.status(404).end();
  } else if (error.isJoi) {
    response.status(400).end();
  } else if (response !== undefined) {
    response.status(500).end();
  }
}

module.exports = { errorHandler };
