'use strict';
const AWS = require('aws-sdk');
const sns = new AWS.SNS({ apiVersion: '2010-03-31' })

module.exports.handler = (event, context, callback) => {
  publishInvalidateCDNEvent()
    .then( results => callback(null, results))
    .catch( err => callback(err, 'Unexpected error'));  
};  

const doPublishInvalidateCDNEvent = () => {
  const params = {
    Message: 'Site bucket was updated',
    TopicArn: process.env.SITE_UPDATED_SNS
  };
  console.log('Sending the sitebucket updated event with params', params);
  return sns.publish(params).promise();
};
