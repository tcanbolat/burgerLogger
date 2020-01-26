// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(cols, vals, cb) {
    const queryString = "INSERT INTO " + table;
  }

  // updateOne()
};

module.exports = orm;
