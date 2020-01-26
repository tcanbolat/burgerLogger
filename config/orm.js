// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

  // insertOne()

  // updateOne()
};

module.exports = orm;
