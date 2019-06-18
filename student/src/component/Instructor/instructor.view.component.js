import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import axios from "axios";

const Instructor = props =>(
    <tr>
        <td>{props.instructor.Name}</td>
        <td>{props.instructor.Email}</td>
        <td>{props.instructor.Phone}</td>

        <td>
            <Link className="btn btn-primary" to={"/trainsModify/"+props.instructor._id}>Modify</Link>
        </td>
        <td>
            <Link className="btn btn-danger" to={"/trainsDelete/"+props.instructor._id}>Delete</Link>
        </td>
    </tr>
);

export default class ViewInstructor extends Component{

    componentDidMount() {
        document.title="Instructor(Admin) | SLIIT";
        axios.get('http://localhost:4000/instructor/')
            .then(response => {
                this.setState({ Instructor: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    constructor(props){
        super(props);
        this.state = {
            Instructor : []
        };
    }
    instructorList() {
        return this.state.Instructor.map(function(currentInstructor, i){
            return <Instructor instructor={currentInstructor} key={i} />;
        })
    }
    render(){
        return(
            <Router>
                <div className="container">
                    <h3 align="center" style={{color: 'red'}}>Instructors List</h3>
                    <table className="table table-responsive-sm"  style={{marginTop: 20, color: 'black', fontWeight: "bold", background: 'white'}} >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email </th>
                            <th>Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.instructorList() }
                        </tbody>
                    </table>
                </div>
                {/*<Route path="/trainsModify/" component={TrainModify}/>*/}
                {/*<Route path="/trainsDelete/" component={TrainDelete}/>*/}
            </Router>
        );
    }
}

