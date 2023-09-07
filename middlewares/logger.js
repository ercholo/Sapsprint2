require('dotenv').config()
const { createLogger, format, transports } = require('winston');
const { combine, simple, timestamp, label, prettyPrint, printf } = format;

const timezoned = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Madrid'
  });
}

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}]: ${message}`;
});

config.log = createLogger({
  format: combine(
    timestamp({ format: timezoned }),
    myFormat
  ),
  transports: [
    new transports.File({
      filename: process.env.LOGFILES_INFO,
      level: 'info'
    }),
    new transports.File({
      filename: process.env.LOGFILES_ERROR,
      level: 'error'
    }),
    new transports.Console()
  ]
});

module.exports = config;