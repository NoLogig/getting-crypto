#!/usr/bin/env node
// Shebang (UNIX) line 

import { serverPort } from "../config";
import { createServer } from "http";
import mainServer from '../app';

// Get port from environment and store in Express
const port = normalizePort(process.env.PORT || serverPort);
mainServer.app.set("port", port);

// Create HTTP server.
const server = createServer(mainServer.app);

// listen on provided ports 
server.listen(port);
// add error handler 
server.on("error", onError);
// start listening on port 
server.on("listening", onListening);

// Normalize a port into a number, string, or false
function normalizePort(val): number|string|boolean {

  let port = (typeof val === 'string') ? parseInt(val, 10) : val;

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}
// Handler
function onError(error:  NodeJS.ErrnoException) {
  if (error.syscall !== "listen") throw error;

  let bind = typeof port === "string" ? "Pipe: " + port : "Port: " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  let addr = server.address(); 
  
  let bind = (typeof addr === 'string') 
  ? `Pipe: ${addr}` 
  : `Port: ${addr.port}`;
 
  console.info(`App listening at http://${addr.address}:${addr.port}`);
  console.log(`App listening on ${bind}`);
}
