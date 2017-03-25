'use strict';
const AWS = require('aws-sdk');
const cloudFront = new AWS.CloudFront({ apiVersion: '2016-11-25' })

module.exports.handler = (event, context, callback) => {
  invalidateCDN()
    .then( results => callback(null, results))
    .catch( err => callback(err, 'Unexpected error'));  
};

const invalidateCDN = () => {
  return process.env.CDN ? doInvalidateCDN() : Promise.resolve('No CDN to invalidate');
};

const doInvalidateCDN = () => {
  const params = {
    DistributionId: process.env.CDN,
    InvalidationBatch: {
      CallerReference: (new Date()).getTime().toString(),
      Paths: {
        Quantity: 2,
        Items: [ '/index.html', '/assets*' ]
      }
    }
  };
  console.log('Invalidating the CDN with params', params);
  return cloudFront.createInvalidation(params).promise();
};
