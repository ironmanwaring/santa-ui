'use strict';
const AWS = require('aws-sdk');

module.exports.handler = (event, context, callback) => {
  console.log('Received bucket event ', event);
  console.log('Stringified', JSON.stringify(event));
  callback(null, 'Received event');
  
};
