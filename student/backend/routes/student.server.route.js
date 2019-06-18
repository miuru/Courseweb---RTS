const express = require('express');
const studentRoute = express.Router();

// Require Business model in our routes module
let Student = require('../../backend/models/Student');

// Defined store route
studentRoute.route('/Insert').post(function (req, res) {
    let student = new Student(req.body);
    student.save()
        .then(student => {
            res.status(200).json({'student': 'Student added successfully'});
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

// Defined get data(index or listing) route
studentRoute.route('/').get(function (req, res) {
    Student.find(function(err, students){
        if(err){
            console.log(err);
        }
        else {
            res.json(students);
        }
    });
});

// Defined edit route
studentRoute.route('/get/:id').get(function (req, res) {
    let id = req.params.id;
    Student.findById(id, function (err, student){
        res.json(student);
    });
});

//  Defined update route
studentRoute.route('/update/:id').post(function (req, res) {
    Student.findById(req.params.id, function(err, student) {
        if (!student)
            res.status(404).send("data is not found");
        else {
            student.firstname = req.body.firstname;
            student.middlename = req.body.middlename;
            student.lastname = req.body.lastname;
            student.nic = req.body.nic;
            student.studentId = req.body.studentId;
            student.level = req.body.level;
            student.degree = req.body.degree;
            student.email = req.body.email;
            student.mobileNum = req.body.mobileNum;
            student.telephoneNum = req.body.telephoneNum;
            student.dob  =req.body.dob;
            student.presentAddress = req.body.presentAddress;
            student.permenentAddress = req.body.permenentAddress;
            student.inCaseEmg = req.body.inCaseEmg;
            student.emgPhone = req.body.emgPhone;
            student.idPicture = req.body.idPicture;
            student.highSchool = req.body.highSchool;
            student.extra = req.body.extra;


            student.save().then(student => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
studentRoute.route('/:id').delete(function (req, res) {
    let id = req.params.id;
    Student.findById(id, function (err, students) {
        if (err) {
            console.log(err);
        } else {
            students.remove();
            res.json(students);
        }
    });
});

module.exports = studentRoute;
