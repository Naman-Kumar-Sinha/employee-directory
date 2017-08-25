var mongoose = require('mongoose');

//var dbURI = 'mongodb://localhost/test';

var dbURI = process.env.PROTOTYPE_APPS_DB;

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

var employeesSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    dob: Date,
    department: String,
    gender: String,
    age: Number
});

mongoose.model('Employee', employeesSchema);