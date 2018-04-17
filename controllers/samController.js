var express = require("express");

var router = express.Router();

// Import the model (sandwich.js) to use its database functions.
var sandwich = require("../models/sandwich.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  sandwich.all(function(data) {
    var hbsObject = {
      sandwiches: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/sandwiches", function(req, res) {
  sandwich.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/sandwiches/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  sandwich.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/sandwiches/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  sandwich.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
