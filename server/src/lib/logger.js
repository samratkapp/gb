import winston from 'winston'

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  debug: 'blue'
})
const logConfiguration = {
  transports: [
    new (winston.transports.Console)({
      timestamp: function () {
        return (new Date()).toLocaleTimeString()
      },
      prettyPrint: true,
      colorize: true,
      handleExceptions: true,
      humanReadableUnhandledException: true,
      level: 'debug',
      json: false,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple()
        
      )
    }),
    new winston.transports.File({
      level: 'error',
      // Create the log directory if it does not exist
      filename: 'logs/error.log'
    }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ]
} 

export const logger = winston.createLogger(logConfiguration)