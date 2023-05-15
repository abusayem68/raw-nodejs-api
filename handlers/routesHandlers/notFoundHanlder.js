/* 
title: NotFound Handler
Description: NotFound Handler
Author: Md. Abu Sayem learned from Learn with sumit youtube chanel
Date: 2023/05/15
*/
// module scafolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: 'your requested url not found',
  });
};

module.exports = handler;
