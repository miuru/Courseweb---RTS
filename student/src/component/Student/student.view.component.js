import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import axios from "axios";
import deleteStudent from './student.delete';

const Student = props =>(
    <tr>
        <td>{props.student.studentId}</td>
        <td>{props.student.firstname}</td>
        <td>{props.student.lastname}</td>
        <td>{props.student.nic}</td>

        <td>{props.student.level}</td>

        <td>{props.student.email}</td>
        <td>{props.student.mobileNum}</td>
        <td>{props.student.presentAddress}</td>
        <td>{props.student.inCaseEmg}</td>
        <td>{props.student.emgPhone}</td>


        {/*<td>*/}
            {/*<Link className="btn btn-primary" to={"/trainsModify/"+props.instructor._id}>Modify</Link>*/}
        {/*</td>*/}
        <td>
            <Link className="btn btn-danger" to={"/deleteStudent/"+props.student._id}>Delete</Link>
        </td>
    </tr>
);

export default class ViewStudents extends Component{

    componentDidMount() {
        document.title="Student | Enigma";
        axios.get('http://localhost:4000/students/')
            .then(response => {
                this.setState({ Student: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    course(id){
        axios.get('http://localhost:4000/course/' + id).then(
            dataSet => {
                alert('Name : ' + dataSet.data.Name + ' Code : ' + dataSet.data.Code);
            }
        )
    }

    constructor(props){
        super(props);
        this.state = {
            Student : []
        };
    }
    studentList() {
        return this.state.Student.map(function(currentStudent, i){
            return <Student student={currentStudent} key={i} />;
        })
    }
    render(){
        return(
            <Router>
                <div className="container">
                    <h3 align="center" style={{color: 'Blue'}}>List of Registered Students</h3>
                    <table className="table table-responsive-sm"  style={{marginTop: 20, color: 'black', fontWeight: "bold", background: 'white'}} >
                        <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>First Name </th>
                            <th>Last Name</th>
                            <th>NIC</th>
                            <th>level</th>
                            <th>Email</th>
                            <th>Mobile number</th>

                            <th>Present Address</th>
                            <th>In Case Emg</th>

                            <th>Phone number (Emg)</th>

                        </tr>
                        </thead>
                        <tbody>
                        { this.studentList() }
                        </tbody>
                    </table>
                </div>
                <Route path="/deleteStudent/" component={deleteStudent}/>
                {/*<Route path="/trainsDelete/" component={TrainDelete}/>*/}
            </Router>
        );
    }
}

