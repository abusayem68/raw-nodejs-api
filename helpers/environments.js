/* 
title: Environments 
Description: Handle all environments things
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/16
*/

// dependencies

// module scafolding
const environments = {};

environments.staging = {
  port: 3000,
  envName: 'staging',
};

environments.production = {
  port: 5000,
  envName: 'production',
};

// determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

//   export corresponding environments object
const environmentToExport =
  typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = environmentToExport;
