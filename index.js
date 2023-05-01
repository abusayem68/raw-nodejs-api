/* 
title: Uptime Monitoring API
Description: A RESTful Api to monitor up or down time of user defined links
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/01
*/
// dependencies
const http = require('http');

const { handleReqRes } = require('./helpers/handleReqRes');

// module scaffolding
const app = {};

// configuration
app.config = {
  port: 9000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`API listening on port ${app.config.port}`);
  });
};

// handle req and response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
