/* 
title: Routes
Description: Application Routes
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/01
*/
// dependencies
const { sampleHandler } = require('./handlers/routesHandlers/sampleHandler');

// dependencies

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
