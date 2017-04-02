'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01', region: 'us-east-1' });

module.exports.handler = (event, context, callback) => {
  console.log('Received CloudFormation event', JSON.stringify(event));
  
  if(event.RequestType !== 'Delete') {
    sendCloudFormationResponse(event, context, callback, 'SUCCESS');
  } else {
    const bucket = event.ResourceProperties.BucketName;
    listBucketObjects(bucket)
      .then( objects => emptyBucket(objects, bucket))
      .then( () => sendCloudFormationResponse(event, context, callback, 'SUCCESS'))
      .catch( err => sendCloudFormationResponse(event, context, callback, 'ERROR'));
  }
};

const listBucketObjects = bucket => {
  const params = { Bucket: bucket };
  console.log('Listing objects with params', params);
  return s3.listObjectsV2(params).promise();
};

const emptyBucket = (objects, bucket) => {
  const params = {
    Bucket: bucket,
    Delete: {
        Objects: objects.Contents.map( object => { return { Key: object.Key } })
    }
  };
  console.log('Deleting objects from bucket with params', params);
  return s3.deleteObjects(params).promise();
};

// Nasty CloudFormation response code I found online and didn't want to clean up - it works
const sendCloudFormationResponse = (event, context, callback, responseStatus, responseData, physicalResourceId) => {
  let responseBody = JSON.stringify({
    Status: responseStatus,
    Reason: 'See the details in CloudWatch Log Stream: ' + context.logStreamName,
    PhysicalResourceId: physicalResourceId || context.logStreamName,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    Data: responseData
  });
 
  console.log('Response body:\n', responseBody);
  var https = require('https');
  var url = require('url');
 
  var parsedUrl = url.parse(event.ResponseURL);
  var options = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: 'PUT',
    headers: {
      'content-type': '',
      'content-length': responseBody.length
    }
  };
 
  var request = https.request(options, function(response) {
    console.log('Status code: ' + response.statusCode);
    console.log('Status message: ' + response.statusMessage);
    context.done();
  });
 
  request.on('error', function(error) {
    console.log('send(..) failed executing https.request(..): ' + error);
    context.done();
  });
 
  request.write(responseBody);
  request.end();
};
