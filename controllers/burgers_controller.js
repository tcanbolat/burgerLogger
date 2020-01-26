var express = require("express");
const burger = require("../models/burger");
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("", function(req, res) {});

router.put("", function(req, res) {});

// Export routes for server.js to use.
module.exports = router;
