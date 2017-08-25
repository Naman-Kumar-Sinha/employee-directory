var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models/db.js');

app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var routes = require('./api/routes.js');

/**CRUD Routes */
app.get('/employee', routes.read);
app.post('/employee', routes.create);
app.get('/employee/:id', routes.edit);
app.put('/employee/:id', routes.update);
app.delete('/employee/:id', routes.delete);

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res){
    console.log("Catch the action at port "+ port);
});