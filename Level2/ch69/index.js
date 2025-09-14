const winston = require('winston');
require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/app-%DATE%.log',
  datePattern: 'YYYY-MM-DD'
});
const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [transport]
});

logger.info('Hello log');
