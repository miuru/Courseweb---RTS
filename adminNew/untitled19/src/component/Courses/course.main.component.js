import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import axios from "axios";
import CourseAdd from "./course.add.component";

import CourseUpdate from './course.update.component';
import CourseDelete from './course.delete.component';
import back from './wall.jpg'
const secionStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' repeat',
};
const Course = props => (
    <tr>
        <td>{props.course.Name}</td>
        <td>{props.course.Code}</td>
        <td>
            <Link className="btn btn-primary" to={"/courseUpdate/"+props.course._id}>Modify</Link>
        </td>
        <td>
            <Link className="btn btn-danger" to={"/courseDelete/"+props.course._id}>Delete</Link>
        </td>
    </tr>
);

export default class CourseMain extends Component {

    componentDidMount() {
        document.title = "Courses(Admin) | SLIIT";
        axios.get('http://localhost:4000/course/')
            .then(response => {
                this.setState({Course: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    constructor(props){
        super(props);
        this.state = {
            Course : []
        };
    }

    courseList() {
        return this.state.Course.map(function(currentCourse, i){
            return <Course course={currentCourse} key={i} />;
        })
    }

    render(){
        return(
            <Router>
                <div style={{}}>
                <div style={{width: '800px'}}>
                    <h3 className='modal-header' style={{
                        marginTop: '30px',
                        marginLeft: '570px',
                        color: '#4D4DE1',
                        fontFamily: 'Stencil',
                        fontSize : '55px',
                        background: 'Hue',
                        width: '280px',
                        borderRadius: 80
                    }} align="center">Courses</h3>
                </div>
                <div style={{
                    marginLeft: "60px",
                    marginTop: '40px',
                    color: 'black',
                    fontFamily: '',
                    width: '1400px'
                }}>
                    <div className="container">
                    <table className="table table-responsive-sm"  style={{marginTop: 20, color: 'black', fontWeight: "bold", background: 'white'}} >
                        <thead style={{background:'#AEA1FF',fontFamily: 'Stencil'}} >
                        <tr>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Modify Course</th>
                            <th>Delete Course</th>
                        </tr>
                        </thead>
                        <tbody style={{background:'#D9E3F0',color:''}}>
                        { this.courseList() }
                        </tbody>
                    </table>
                    </div>
                </div>
                <Route path="/courseUpdate" component={CourseUpdate}/>
                <Route path="/CourseDelete" component={CourseDelete}/>
                </div>
                </Router>

        )
    }
}