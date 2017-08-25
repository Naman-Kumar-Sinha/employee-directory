var mongoose = require('mongoose');
var Employee = mongoose.model('Employee');

exports.create = function(req, res) {
    var newEmployee = new Employee(req.body);
    //newEmployee = req.body;
    newEmployee.save(function(err, savedEmployee) {
        if(err) {
            console.log('Error: While saving employee records');
            return res.status(500).send();
        }
        else {
            return res.status(200).send('OK');
        }
    });
};

exports.read = function(req, res) {
    Employee.find({}, function(err, employees){
        if(err) {
            console.log('Error: While fetching employee records');
            return res.status(500).send('GET ALL RECORDS FAILED');
        }
        else {
            res.json(employees);
        }
    });
};

exports.edit = function(req, res) {
    Employee.findById(req.params.id, function(err, employee){
        if(err) {
            console.log('Error: While fetching one employee records');
            return res.status(500).send('GET ONE RECORDS FAILED');
        }
        else {
            res.json(employee);
        }
    });
};

exports.update = function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, updatedEmployee){
        if(err) {
            console.log('Error: While updating employee records');
            return res.status(500).send();
        }
        else {
            return res.status(200).send('OK');
        }
    });
};

exports.delete = function(req, res) {
    Employee.findByIdAndRemove(req.params.id, function(err, deletedEmployee){
        if(err) {
            console.log('Error: While deleting employee records');
            return res.status(500).send();
        }
        else {
            return res.status(200).send('OK');
        }        
    });
};