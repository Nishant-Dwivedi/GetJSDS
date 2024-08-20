class AppError extends Error {
  constructor(errDescription, isOperationalError = true, httpStatusCode) {
    super(errDescription);
    httpStatusCode ? (this.httpStatusCode = httpStatusCode) : null;
    this.isOperationalError = isOperationalError;
  }
}

module.exports = { AppError };
