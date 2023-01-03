"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var axios = require('axios');

var app = express();
app.use(bodyParser.json());
app.post('/events', function (req, res) {
  var event = req.body;
  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);
  res.send({
    status: 'OK'
  });
});
app.listen(4005, function () {
  console.log('run at 4005');
});