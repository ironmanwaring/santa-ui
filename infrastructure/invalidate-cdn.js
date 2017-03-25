'use strict';
const AWS = require('aws-sdk');
const cloudFront = new AWS.CloudFront({ apiVersion: '2016-11-25' })

module.exports.handler = (event, context, callback) => {
  console.log('Received event to invalidate cdn: ', event);
  console.log('Stringified', JSON.stringify(event));
  callback(null, 'Worked?');
  // invalidateCDN()
  //   .then( results => callback(null, results))
  //   .catch( err => callback(err, 'Unexpected error'));  
};

const invalidateCDN = () => {
  const params = {
    DistributionId: process.env.CDN,
    InvalidationBatch: {
      CallerReference: (new Date()).getTime(),
      Paths: {
        Quantity: 1,
        Items: [ 'index.html' ]
      }
    }
  };
  return cloudFront.createInvalidation(params).promise();
};
