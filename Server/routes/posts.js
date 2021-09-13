const { ObjectId } = require("bson");
const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const postRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the posts.
postRoutes.route("/posts").get((req, res) => {
  let db_connect = dbo.getDb("PlayedIt");
  console.log(db_connect);
  db_connect
    .collection("Posts")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new post.
postRoutes.route("/posts/add").post((req, res) => {
  let db_connect = dbo.getDb("PlayedIt");
  let myObj = {
    name: req.body.name,
  };

  console.log(myObj);
  db_connect.collection("Posts").insertOne(myObj, (err, res) => {
    if (err) throw err;
  });
});

// // This section will help you update a record by _id.
postRoutes.route("/update/:_id").post((req, res) => {
  let db_connect = dbo.getDb("PlayedIt");
  let myquery = { id: req.body._id };
  let newvalues = {
    $set: {
      name: req.body.name
    },
  };
  db_connect
    .collection("Posts")
    .updateOne(myquery, newvalues, (err, res) => {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record by _id
postRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("PlayedIt");
  var myquery = { _id: req.body._id, };
  db_connect.collection("Posts").deleteOne(myquery,(err, obj) => {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

// This section will help you remove a record by _id
postRoutes.route("/posts/:id").delete((req, res) => {
  let db_connect = dbo.getDb("PlayedIt");
  var myquery = { _id: new ObjectId(req.params.id) };
  db_connect.collection("Posts").deleteOne(myquery,(err, obj) => {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = postRoutes;
