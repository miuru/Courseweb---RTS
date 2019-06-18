import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import axios from "axios";

const Instructor = props => (
    <tr>
        <td>
            <Link className="btn btn-primary" to={"/instructorUpdate/"+props.instructor._id}>Modify</Link>
        </td>
        <td>
            <Link className="btn btn-danger" to={"/instructorDelete/"+props.instructor._id}>Delete</Link>
        </td>
    </tr>
);

export default class InstructorMain extends Component {

    componentDidMount() {
        document.title = "Instructor(Admin) | SLIIT";
        axios.get('http://localhost:4000/instructor/')
            .then(response => {
                this.setState({Instructor: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    constructor(props){
        super(props);
        this.state = {
            Instructor : [],
            Courses:[]
        };
    }
    course(id){
        axios.get('http://localhost:4000/course/' + id).then(
            dataSet => {
                alert('Name : ' + dataSet.data.Name + ' Code : ' + dataSet.data.Code);
            }
        )
    }
    instructorList() {
        return this.state.Instructor.map(function(currentInstructor, i){
            return <Instructor instructor={currentInstructor} key={i} />;
        })
    }

    render(){
        return(
            <Router>
                <div style={{width: '800px'}}>
                    <h3 className='modal-header' style={{
                        marginTop: '50px',
                        marginLeft: '500px',
                        color: '#4D4DE1',
                        fontFamily: 'Stencil',
                        fontSize : '55px',
                        background: 'Hue',
                        width: '480px',
                        borderRadius: 80
                    }} align="center">Instructors</h3>
                </div>
                <div style={{
                    marginLeft: "60px",
                    marginTop: '50px',
                    color: 'black',
                    width: '1400px'
                }}>

                    {/*<Link className="btn btn-outline-danger"*/}
                          {/*style={{*/}
                              {/*width: '120px',*/}
                              {/*height: '80px',*/}
                              {/*background: '',*/}
                              {/*marginLeft: '60px',*/}
                              {/*marginTop: '30px'*/}
                          {/*}} to="/CourseAdd">Add Instructor</Link>*/}

                    {/*<Link className="btn btn-outline-danger"*/}
                          {/*style={{*/}
                              {/*width: '120px',*/}
                              {/*height: '80px',*/}
                              {/*background: '',*/}
                              {/*marginLeft: '60px',*/}
                              {/*marginTop: '30px'*/}
                          {/*}} to="/CourseView">View Instructor</Link>*/}
                    <div className="container">
                        <table className="table table-responsive-sm"  style={{marginTop: 20, color: 'black', fontWeight: "bold", background: 'white'}} >
                            <thead style={{fontFamily: 'Stencil',background:'#AEA1FF'}}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Course</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody style={{background:'#D9E3F0'}}>
                            {

                                this.state.Instructor.map( cou => {
                                    return (
                                        <tr key={cou._id}>
                                            <td>{cou.Name}</td>
                                            <td>{cou.Email}</td>
                                            <td>{cou.Phone}</td>
                                            <td><button className="btn-success" onClick = {this.course.bind(this,cou.course)}>Courses</button></td>
                                            <td>
                                                <Link className="btn btn-primary" to={"/instructorUpdate/"+cou._id}>Modify</Link>
                                            </td>
                                            <td>
                                                <Link className="btn btn-danger" to={"/instructorDelete/"+cou._id}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/*<Route path="/CourseAdd" component={CourseAdd}/>*/}
                {/*<Route path="/CourseView" component={CourseView}/>*/}
            </Router>
        )
    }
}