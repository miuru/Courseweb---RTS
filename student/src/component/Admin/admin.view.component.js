import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import axios from "axios";

const Admin = props =>(
    <tr>
        <td>{props.admin.Name}</td>
        <td>{props.admin.Email}</td>
        <td>{props.admin.Phone}</td>

        <td>
            <Link className="btn btn-primary" to={"/adminsModify/"+props.admin._id}>Modify</Link>
        </td>
        <td>
            <Link className="btn btn-danger" to={"/adminsDelete/"+props.admin._id}>Delete</Link>
        </td>
    </tr>
);

export default class ViewAdmin extends Component{

    componentDidMount() {
        document.title="Admin(Admin) | SLIIT";
        axios.get('http://localhost:4000/admin/')
            .then(response => {
                this.setState({ Admin: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    constructor(props){
        super(props);
        this.state = {
            Admin : []
        };
    }
    adminList() {
        return this.state.Admin.map(function(currentAdmin, i){
            return <Admin admin={currentAdmin} key={i} />;
        })
    }
    render(){
        return(
            <Router>
                <div className="container">
                    <h3 align="center" style={{color: 'red'}}>Admins List</h3>
                    <table className="table table-responsive-sm"  style={{marginTop: 20, color: 'black', fontWeight: "bold", background: 'white'}} >
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email </th>
                            <th>Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.adminList() }
                        </tbody>
                    </table>
                </div>
            </Router>
        );
    }
}

