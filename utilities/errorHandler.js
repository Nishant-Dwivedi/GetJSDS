const logger = require("pino")();

function errorHandler(error, response) {
  logger.error(error);
  if (error.statusCode == 404) {
    response.status(404).end();
    return;
  } else {
    response.status(500).end();
  }
}

module.exports = { errorHandler };
