const BigPromise = require("../middlewares/bigPromise");
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'ap-south-1'});
const dynamoDB = new AWS.DynamoDB.DocumentClient()


exports.getLogByResourceId = BigPromise(async (req, res, next) => {
    const {resourceid} = req.body;
    const result = await dynamoDB
    .scan({
    TableName: "logrecords",
    FilterExpression:
      "resourceId = :s",
    ExpressionAttributeValues: {
      ":s": resourceid,
    },
  })
  .promise();
  res.send({
    result
  });
})


exports.getLogByLevel = BigPromise(async (req, res, next) => {
  const {level} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "level_1 = :s",
  ExpressionAttributeValues: {
    ":s": level,
  },
})
.promise();
res.send({
  result
});
})

exports.getLogByMessage = BigPromise(async (req, res, next) => {
  const {message} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "message = :s",
  ExpressionAttributeValues: {
    ":s": message,
  },
})
.promise();
res.send({
  result
});
})

exports.getLogByResourceId = BigPromise(async (req, res, next) => {
  const {resourceid} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "resourceId = :s",
  ExpressionAttributeValues: {
    ":s": resourceid,
  },
})
.promise();
res.send({
  result
});
})
exports.getLogByTimestamp = BigPromise(async (req, res, next) => {
  const {timestamp} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "resourceId = :s",
  ExpressionAttributeValues: {
    ":s": timestamp,
  },
})
.promise();
res.send({
  result
});
})

exports.getLogByTraceId = BigPromise(async (req, res, next) => {
  const {traceid} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "resourceId = :s",
  ExpressionAttributeValues: {
    ":s": traceid,
  },
})
.promise();
res.send({
  result
});
})

exports.getLogBySpanId = BigPromise(async (req, res, next) => {
  const {spanid} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "resourceId = :s",
  ExpressionAttributeValues: {
    ":s": spanid,
  },
})
.promise();
res.send({
  result
});
})

exports.getLogByCommit = BigPromise(async (req, res, next) => {
  const {commit} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "resourceId = :s",
  ExpressionAttributeValues: {
    ":s": commit,
  },
})
.promise();
res.send({
  result
});
})

exports.getLogByMetadata = BigPromise(async (req, res, next) => {
  const {metadata} = req.body;
  const result = await dynamoDB
  .scan({
  TableName: "logrecords",
  FilterExpression:
    "resourceId = :s",
  ExpressionAttributeValues: {
    ":s": metadata,
  },
})
.promise();
res.send({
  result
});
})