#!/usr/bin/env node

/**
 * Module dependencies.
 */
// var app = require('../app');
// var debug = require('debug')('server-express:server');
// var http = require('http');
"use strict";

var _http = _interopRequireDefault(require("http"));

var _debug = _interopRequireDefault(require("debug"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var debug = (0, _debug["default"])('server-express:server');
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (Number.isNaN(port)) {
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
 * Get port from environment and store in Express.
 */


var port = normalizePort(process.env.PORT || '3000');

_app["default"].set('port', port);
/**
 * Create HTTP server.
 */


var server = _http["default"].createServer(_app["default"]);
/**
 * Event listener for HTTP server "error" event.
 */


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? "Pipe ".concat(port) : "Port ".concat(port); // handle specific listen errors with friendly messages

  switch (error.code) {
    case 'EACCES':
      console.error("".concat(bind, " requires elevated privileges"));
      process.exit(1);
      break;

    case 'EADDRINUSE':
      console.error("".concat(bind, " is already in use"));
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
  var addr = server.address();
  var bind = typeof addr === 'string' ? "pipe ".concat(addr) : "port ".concat(addr ? addr.port : port);
  debug("Listening on ".concat(bind));
}
/**
 * Listen on provided port, on all network interfaces.
 */


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlYnVnIiwibm9ybWFsaXplUG9ydCIsInZhbCIsInBvcnQiLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJhcHAiLCJzZXQiLCJzZXJ2ZXIiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwib25FcnJvciIsImVycm9yIiwic3lzY2FsbCIsImJpbmQiLCJjb2RlIiwiY29uc29sZSIsImV4aXQiLCJvbkxpc3RlbmluZyIsImFkZHIiLCJhZGRyZXNzIiwibGlzdGVuIiwib24iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7QUFJQTtBQUNBO0FBQ0E7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLHVCQUFZLHVCQUFaLENBQWQ7QUFFQTs7OztBQUdBLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQW9DO0FBQ2xDLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDRixHQUFELEVBQU0sRUFBTixDQUFyQjs7QUFFQSxNQUFJRyxNQUFNLENBQUNDLEtBQVAsQ0FBYUgsSUFBYixDQUFKLEVBQXdCO0FBQ3RCO0FBQ0EsV0FBT0QsR0FBUDtBQUNEOztBQUVELE1BQUlDLElBQUksSUFBSSxDQUFaLEVBQWU7QUFDYjtBQUNBLFdBQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFPLEtBQVA7QUFDRDtBQUVEOzs7OztBQUdBLElBQU1BLElBQUksR0FBR0YsYUFBYSxDQUFDTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixNQUFyQixDQUExQjs7QUFDQUMsZ0JBQUlDLEdBQUosQ0FBUSxNQUFSLEVBQWdCUixJQUFoQjtBQUVBOzs7OztBQUdBLElBQU1TLE1BQU0sR0FBR0MsaUJBQUtDLFlBQUwsQ0FBa0JKLGVBQWxCLENBQWY7QUFFQTs7Ozs7QUFHQSxTQUFTSyxPQUFULENBQWlCQyxLQUFqQixFQUE2QjtBQUMzQixNQUFJQSxLQUFLLENBQUNDLE9BQU4sS0FBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsVUFBTUQsS0FBTjtBQUNEOztBQUVELE1BQU1FLElBQUksR0FBRyxPQUFPZixJQUFQLEtBQWdCLFFBQWhCLGtCQUNEQSxJQURDLG1CQUVEQSxJQUZDLENBQWIsQ0FMMkIsQ0FTM0I7O0FBQ0EsVUFBUWEsS0FBSyxDQUFDRyxJQUFkO0FBQ0UsU0FBSyxRQUFMO0FBQ0VDLE1BQUFBLE9BQU8sQ0FBQ0osS0FBUixXQUFpQkUsSUFBakI7QUFDQVgsTUFBQUEsT0FBTyxDQUFDYyxJQUFSLENBQWEsQ0FBYjtBQUNBOztBQUNGLFNBQUssWUFBTDtBQUNFRCxNQUFBQSxPQUFPLENBQUNKLEtBQVIsV0FBaUJFLElBQWpCO0FBQ0FYLE1BQUFBLE9BQU8sQ0FBQ2MsSUFBUixDQUFhLENBQWI7QUFDQTs7QUFDRjtBQUNFLFlBQU1MLEtBQU47QUFWSjtBQVlEO0FBRUQ7Ozs7O0FBR0EsU0FBU00sV0FBVCxHQUF1QjtBQUNyQixNQUFNQyxJQUFJLEdBQUdYLE1BQU0sQ0FBQ1ksT0FBUCxFQUFiO0FBQ0EsTUFBTU4sSUFBSSxHQUFHLE9BQU9LLElBQVAsS0FBZ0IsUUFBaEIsa0JBQ0RBLElBREMsbUJBRURBLElBQUksR0FBR0EsSUFBSSxDQUFDcEIsSUFBUixHQUFlQSxJQUZsQixDQUFiO0FBR0FILEVBQUFBLEtBQUssd0JBQWlCa0IsSUFBakIsRUFBTDtBQUNEO0FBRUQ7Ozs7O0FBR0FOLE1BQU0sQ0FBQ2EsTUFBUCxDQUFjdEIsSUFBZDtBQUNBUyxNQUFNLENBQUNjLEVBQVAsQ0FBVSxPQUFWLEVBQW1CWCxPQUFuQjtBQUNBSCxNQUFNLENBQUNjLEVBQVAsQ0FBVSxXQUFWLEVBQXVCSixXQUF2QiIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbi8vIHZhciBhcHAgPSByZXF1aXJlKCcuLi9hcHAnKTtcbi8vIHZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NlcnZlci1leHByZXNzOnNlcnZlcicpO1xuLy8gdmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBjcmVhdGVEZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBkZWJ1ZyA9IGNyZWF0ZURlYnVnKCdzZXJ2ZXItZXhwcmVzczpzZXJ2ZXInKTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsOiBzdHJpbmcpIHtcbiAgY29uc3QgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xuXG4gIGlmIChOdW1iZXIuaXNOYU4ocG9ydCkpIHtcbiAgICAvLyBuYW1lZCBwaXBlXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGlmIChwb3J0ID49IDApIHtcbiAgICAvLyBwb3J0IG51bWJlclxuICAgIHJldHVybiBwb3J0O1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEdldCBwb3J0IGZyb20gZW52aXJvbm1lbnQgYW5kIHN0b3JlIGluIEV4cHJlc3MuXG4gKi9cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgJzMwMDAnKTtcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuLyoqXG4gKiBDcmVhdGUgSFRUUCBzZXJ2ZXIuXG4gKi9cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cbi8qKlxuICogRXZlbnQgbGlzdGVuZXIgZm9yIEhUVFAgc2VydmVyIFwiZXJyb3JcIiBldmVudC5cbiAqL1xuZnVuY3Rpb24gb25FcnJvcihlcnJvcjogYW55KSB7XG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJ1xuICAgID8gYFBpcGUgJHtwb3J0fWBcbiAgICA6IGBQb3J0ICR7cG9ydH1gO1xuXG4gIC8vIGhhbmRsZSBzcGVjaWZpYyBsaXN0ZW4gZXJyb3JzIHdpdGggZnJpZW5kbHkgbWVzc2FnZXNcbiAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgY2FzZSAnRUFDQ0VTJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlc2ApO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUFERFJJTlVTRSc6XG4gICAgICBjb25zb2xlLmVycm9yKGAke2JpbmR9IGlzIGFscmVhZHkgaW4gdXNlYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJsaXN0ZW5pbmdcIiBldmVudC5cbiAqL1xuZnVuY3Rpb24gb25MaXN0ZW5pbmcoKSB7XG4gIGNvbnN0IGFkZHIgPSBzZXJ2ZXIuYWRkcmVzcygpO1xuICBjb25zdCBiaW5kID0gdHlwZW9mIGFkZHIgPT09ICdzdHJpbmcnXG4gICAgPyBgcGlwZSAke2FkZHJ9YFxuICAgIDogYHBvcnQgJHthZGRyID8gYWRkci5wb3J0IDogcG9ydH1gO1xuICBkZWJ1ZyhgTGlzdGVuaW5nIG9uICR7YmluZH1gKTtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gcHJvdmlkZWQgcG9ydCwgb24gYWxsIG5ldHdvcmsgaW50ZXJmYWNlcy5cbiAqL1xuc2VydmVyLmxpc3Rlbihwb3J0KTtcbnNlcnZlci5vbignZXJyb3InLCBvbkVycm9yKTtcbnNlcnZlci5vbignbGlzdGVuaW5nJywgb25MaXN0ZW5pbmcpO1xuIl19