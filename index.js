/* 
title: Uptime Monitoring API
Description: A RESTful Api to monitor up or down time of user defined links
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/01
*/
// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object- for app scaffolding
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
app.handleReqRes = (req, res) => {
  // request handling
  // get the url and pase it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder('utf-8');
  let realData = '';
  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();

    console.log(realData);

    // response handle
    res.end(realData);
  });
};

// start the server
app.createServer();
