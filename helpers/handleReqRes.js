/* 
title: Handle request response
Description: Handle request response
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/01
*/

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const {
  notFoundHandler,
} = require('../handlers/routesHandlers/notFoundHanlder');

// app object- for app scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and pase it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    path,
    trimedPath,
    method,
    queryStringObject,
    headersObject,
  };

  const decoder = new StringDecoder('utf-8');
  let realData = '';

  const chosenHandler = routes[trimedPath]
    ? routes[trimedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === 'number' ? statusCode : 500;
    payload = typeof payload === 'object' ? payload : {};

    const payloadString = JSON.stringify(payload);

    // return the final message
    res.writeHead(statusCode);
    res.end(payloadString);
  });
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

module.exports = handler;
