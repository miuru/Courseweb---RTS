const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;



app.use(cors());
app.use(bodyParser.json());

const courseRoutes = express.Router();
const instructorRoutes = express.Router();
const studentRoute = express.Router();
const adminRoutes = express.Router();

const course =  require('./backend/models/course');
const instructor = require ('./backend/models/instructor');
const Student = require('./backend/models/Student');
const admin =  require('./backend/models/admin');

mongoose.connect('mongodb://localhost:27017/coursewebNew', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
});

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(fileUpload());
// app.use('/public', express.static(__dirname + '/public'));
//
//
// app.post('/upload', (req, res, next) => {
//     console.log(req);
//     let imageFile = req.files.file;
//
//     imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
//         if (err) {
//             return res.status(500).send(err);
//         }
//
//         res.json({file: `public/${req.body.filename}.jpg`});
//     });
//
// })
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     const err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

courseRoutes.route('/add').post(function (req, res) {
    let courseIns = new course(req.body);
    courseIns.save()
        .then(course => {
            res.status(200).json(course);
        })
        .catch(err => {
            res.status(400).send('adding new course failed');
        });
});

courseRoutes.route('/').get(function (req, res) {
    course.find(function (err, course) {
        if (err) {
            console.log(err);
        } else {
            res.json(course);
        }
    });
});

courseRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;                                 //id gets from here
    course.findById(id, function (err, courses) {
        res.json(courses);
    });
});
courseRoutes.route('/update/:id').post(function (req, res) {
    course.findById(req.params.id, function (err, courses) {
        if (!courses)
            res.status(404).send("data is not found");
        else
            courses.Name = req.body.Name;
        courses.Code = req.body.Code;

        courses.save().then(course => {
            res.json('Course Updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

courseRoutes.route('/:id').delete(function (req, res) {
    let id = req.params.id;
    course.findById(id, function (err, courses) {
        if (err) {
            console.log(err);
        } else {
            courses.remove();
            res.json(courses);
        }
    });
});


instructorRoutes.route('/add').post(function(req,res){
    let instructionIns = new instructor(req.body);
    let mail = req.body.Email;
    let name = req.body.Name;

    instructionIns.save()
        .then(instructor => {
            res.status(200).json(instructor);
        })
        .catch(err => {
            res.status(400).send('adding new course failed');
        });
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'miurushalinda@gmail.com',
            pass: 'miuru@7124'
        }
    });

    const mailOptions = {
        from: 'miurushalinda@gmail.com',
        to: mail,
        subject: 'SLITIT',
        text: 'Dear '+ name + ' you have been added as an Instructor to the SLITIT System. Thank you ! '
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

instructorRoutes.route('/').get(function (req, res) {
    instructor.find(function (err, instructor) {
        if (err) {
            console.log(err);
        } else {
            res.json(instructor);
        }
    });
});

instructorRoutes.route('/update/:id').post(function (req, res) {
    instructor.findById(req.params.id, function (err, instructors) {
        if (!instructors)
            res.status(404).send("data is not found");
        else
            instructors.Name = req.body.Name;
            instructors.Email = req.body.Email;
            instructors.Phone = req.body.Phone;
            instructors.course = req.body.course;

        instructors.save().then(instructors => {
            res.json('Instructor Updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

courseRoutes.route('/:id').delete(function (req, res) {
    let id = req.params.id;
    instructor.findById(id, function (err, instructors) {
        if (err) {
            console.log(err);
        } else {
            instructors.remove();
            res.json(instructors);
        }
    });
});
adminRoutes.route('/add').post(function(req,res){
    let adminIns = new admin(req.body);
    let mail = req.body.Email;
    let name = req.body.Name;

    adminIns.save()
        .then(admin => {
            res.status(200).json(admin);
        })
        .catch(err => {
            res.status(400).send('adding new admin failed');
        });
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'miurushalinda@gmail.com',
            pass: 'miuru@7124'
        }
    });

    const mailOptions = {
        from: 'miurushalinda@gmail.com',
        to: mail,
        subject: 'SLITIT',
        text: 'Dear '+ name + ' you have been added as an Instructor to the SLITIT System. Thank you ! '
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

adminRoutes.route('/').get(function (req, res) {
    admin.find(function (err, admin) {
        if (err) {
            console.log(err);
        } else {
            res.json(admin);
        }
    });
});

adminRoutes.route('/update/:id').post(function (req, res) {
    admin.findById(req.params.id, function (err, admins) {
        if (!admins)
            res.status(404).send("data is not found");
        else
            admins.Name = req.body.Name;
        admins.Email = req.body.Email;
        admins.Phone = req.body.Phone;

        admins.save().then(admins => {
            res.json('Admin Updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
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


app.use('/course', courseRoutes);
app.use('/instructor',instructorRoutes);
app.use('/admin',adminRoutes);

app.use('/students', require('./backend/routes/student.server.route'));

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
