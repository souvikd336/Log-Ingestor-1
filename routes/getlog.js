const express = require("express");
const router = express.Router();

const {getLogByResourceId, getLogByCommit, getLogByTraceId, getLogByLevel, getLogByMessage, getLogByMetadata, getLogBySpanId, getLogByTimestamp} = require("../controllers/getlogControllers.js");

router.route("/getlog/resourceid").get(getLogByResourceId);
router.route("/getlog/level").get(getLogByLevel);
router.route("/getlog/commit").get(getLogByCommit);
router.route("/getlog/traceid").get(getLogByTraceId);
router.route("/getlog/message").get(getLogByMessage);
router.route("/getlog/metadata").get(getLogByMetadata);
router.route("/getlog/spanid").get(getLogBySpanId);
router.route("/getlog/timestamps").get(getLogByTimestamp);
module.exports = router;