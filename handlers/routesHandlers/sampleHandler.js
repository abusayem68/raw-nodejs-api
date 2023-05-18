/* 
title: Sample Handler
Description: Sample Handler
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/15
*/
// module scafolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: 'This is a sample url',
  });
};

module.exports = handler;
