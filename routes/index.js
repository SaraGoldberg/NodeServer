var express = require('express');
var router = express.Router();
const jwt = require("jsonwebtoken");
var runQuery = require('../connection');

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};

router.get("/login", async function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  const { userName, password } = req.query;
  //Check the pwd in the server
  const token = generateAccessToken(userName);
  console.log("token", token);
  // console.log(getRequest);
  //const request = getRequest.getRequest();
  runQuery.runQuery(`SELECT * FROM Users_tbl WHERE USER_NAME = '${userName}' AND USER_PASSWORD = '${password}'`)
  .then(res1 => {
    console.log(res1, 're11')
    // return res.json({ token: res }).send();
  });

});

// router.post("/signup", function (req, res) {
//   const { user, password } = req.body;
//   console.log('a');
// });
module.exports = router;
