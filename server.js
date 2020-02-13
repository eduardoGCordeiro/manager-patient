const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 5000;

app.get('/patient', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port);