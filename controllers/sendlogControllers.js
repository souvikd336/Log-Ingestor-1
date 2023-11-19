const BigPromise = require("../middlewares/bigPromise");

var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-south-1'});

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});


exports.sendlog = BigPromise(async (req, res, next) => {
    const {level, message, resourceId, timestamp, traceId, spanId, commit, metadata} = req.body;

    var params = {
        TableName: 'logrecords',
        Item: {
          'level_1': level,
          'message': message,
          'resourceId': resourceId,
          'timestamp': timestamp,
          'traceId': traceId,
          'spanId': spanId,
          'commit': commit,
          'metadata': metadata
        }
      };
    const log = await docClient.put(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data);  
        }
      });
      res.status(200).json({
        success: true,
      });

});
