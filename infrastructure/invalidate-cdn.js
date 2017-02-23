'use strict';
const AWS = require('aws-sdk');

module.exports.handler = (event, context, callback) => {
  console.log('Received event to invalidate cdn: ', event);
  callback(null, 'Received event');
  
};
