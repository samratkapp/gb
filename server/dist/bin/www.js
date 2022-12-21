#!/usr/bin/env node
/* eslint-disable no-undef */

/**
 * Module dependencies.
 */
'use strict';

const { logger } = require('../../src/lib/logger.js');

const _app = _interopRequireDefault(require('../app.js'));
const _http = _interopRequireDefault(require('http'));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
// import debug  from "debug";
// const debug = debugOb('server:server');
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
_app['default'].set('port', port);

/**
 * Create HTTP server.
 */

const server = _http['default'].createServer(_app['default']);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe '.concat(port) : 'Port '.concat(port);

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(''.concat(bind, ' requires elevated privileges'));
      // eslint-disable-next-line no-undef
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(''.concat(bind, ' is already in use'));
      // eslint-disable-next-line no-undef
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe '.concat(addr) : 'port '.concat(addr.port);
  logger.info('Listening on '.concat(bind));
}