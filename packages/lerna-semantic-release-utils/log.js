if (typeof window !== "undefined") {
  module.exports = window.console; // eslint-disable-line no-undef
} else {
  var winston = require("winston");

  var logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });

  module.exports = logger;
}
