'use strict';

var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res){
  res.json({greetins: "Hello, API"});
});


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Node is listening on port ' + listener.address().port)
  });


var multer = require('multer')

app.post('/api/fileanalyse', multer().single('upfile'), (request, response) => {
  let responseObject = {}
  responseObject['name'] = request.file.originalname
  responseObject['type'] = request.file.mimetype
  responseObject['size'] = request.file.size
  
  response.json(responseObject)
} )



