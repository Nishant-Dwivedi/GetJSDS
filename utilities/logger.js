function alertLogger(message) {
  console.log(message);
  return;
}
function errorLogger(error) {
  console.error(error.message);
  return;
}

module.exports = { alertLogger, errorLogger };
