'use strict';
const BASE = global.BASE;
const fs = require('fs');
const { createLogger, format, transports } = require('winston');
const { combine, simple, timestamp, label, prettyPrint, printf } = format;
var config = require(BASE + "config.json");

config.ldap = {
  url: config.ldap.url,
  tlsOptions: {
    ca: [fs.readFileSync(BASE + config.ldap.cacert)]
  }
}

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
      filename: config.logfiles.info,
      level: 'info'
    }),
    new transports.File({
      filename: config.logfiles.error,
      level: 'error'
    }),
    new transports.Console()
  ]
});

module.exports = config;