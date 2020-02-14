const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 5000;

AWS.config.update({
  accessKeyId: 'xxxx',
  secretAccessKey: 'xxxx',
  region: "ue-west-2",
  endpoint: "http://localhost:8000"
});

var handlerDynamo = new AWS.DynamoDB.DocumentClient();

app.use(cors());
app.use(bodyParser());

app.post('/patient', (req, res) => {

  var params ={
    TableName: 'patient',
    Item: {
        "id": req.body.id,
        "name": req.body.name,
        "last_name": req.body.last_name,
        "age_of_birth": req.body.age_of_birth,
        "phone": req.body.phone,
        "email": req.body.email,
        "cpf": req.body.cpf,
        "identy": req.body.identy,
        "zip_code": req.body.zip_code,
        "state": req.body.state,
        "city": req.body.city,
        "address": req.body.address,
        "address_number": req.body.address_number,
    }
  };

  handlerDynamo.put(params, function(err, data){
    if (err) {
      res.status(500).json({ "error": err });
    } else {
      res.status(200).json(({ "item": data }));
    }
  });

});


app.put('/patient/:id', (req, res) => {

  var params = {
      TableName: 'patient',
      Key: {
          "id": req.params.id
      },
      UpdateExpression: "SET #name = :name, last_name = :last_name, age_of_birth = :age_of_birth, phone = :phone, email = :email, identy = :identy, zip_code = :zip_code, address = :address, address_number = :address_number, #state = :state, city = :city, cpf = :cpf",
      ExpressionAttributeValues: {
          ":name": req.body.name ,
          ":last_name": req.body.last_name,
          ":age_of_birth": req.body.age_of_birth,
          ":phone": req.body.phone,
          ":email": req.body.email,
          ":identy": req.body.identy,
          ":zip_code": req.body.zip_code,
          ":address": req.body.address,
          ":address_number": req.body.address_number,
          ":state": req.body.state,
          ":city": req.body.city,
          ":cpf": req.body.cpf
      },
      ExpressionAttributeNames: {
          "#name": "name",
          "#state": "state"
      },
      ReturnValues: "UPDATED_NEW"
  };

  handlerDynamo.update(params, function (err, data) {
      if (err) {
        res.status(500).json({ "error": err });
      } else {
        res.status(200).json(({ "item": data }));
      }
  });

});


app.delete('/patient/:id', (req, res) => {

  var params ={
    TableName: 'patient',
    Key: {
        "id": req.params.id
    },
  };

  handlerDynamo.delete(params, function(err, data){
    if (err) {
      res.status(500).json({ "error": err });
    } else {
      res.status(200).json(({ "item": data }));
    }
  });

});

app.listen(port);