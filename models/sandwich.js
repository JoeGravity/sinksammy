// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sandwich = {
  all: function(cb) {
    orm.all("sandwiches", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("sandwiches", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sandwiches", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("sandwiches", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (samController.js).
module.exports = sandwich;
