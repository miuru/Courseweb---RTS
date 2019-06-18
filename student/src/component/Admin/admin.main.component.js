import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import axios from "axios";
import UpdateAdmin from './admin.update.component';
import DeleteAdmin from './admin.delete.component';
const Admin = props => (
    <tr>
        <td>
            <Link className="btn btn-primary" to={"/adminUpdate/"+props.admin._id}>Modify</Link>
        </td>
        <td>
            <Link className="btn btn-danger" to={"/adminDelete/"+props.admin._id}>Delete</Link>
        </td>
    </tr>
);

export default class AdminMain extends Component {

    componentDidMount() {
        document.title = "Admin(Admin) | SLIIT";
        axios.get('http://localhost:4000/admin/')
            .then(response => {
                this.setState({Admin: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    constructor(props){
        super(props);
        this.state = {
            Admin : []
        };
    }
    course(id){
        axios.get('http://localhost:4000/course/' + id).then(
            dataSet => {
                alert('Name : ' + dataSet.data.Name + ' Code : ' + dataSet.data.Code);
            }
        )
    }
    adminList() {
        return this.state.Admin.map(function(currentAdmin, i){
            return <Admin admin={currentAdmin} key={i} />;
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
                    }} align="center">Admins</h3>
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
                    {/*}} to="/CourseAdd">Add Admin</Link>*/}

                    {/*<Link className="btn btn-outline-danger"*/}
                    {/*style={{*/}
                    {/*width: '120px',*/}
                    {/*height: '80px',*/}
                    {/*background: '',*/}
                    {/*marginLeft: '60px',*/}
                    {/*marginTop: '30px'*/}
                    {/*}} to="/CourseView">View Admin</Link>*/}
                    <div className="container">
                        <table className="table table-responsive-sm"  style={{marginTop: 20, color: 'black', fontWeight: "bold", background: 'white'}} >
                            <thead style={{fontFamily: 'Stencil',background:'#AEA1FF'}}>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody style={{background:'#D9E3F0'}}>
                            {

                                this.state.Admin.map( cou => {
                                    return (
                                        <tr key={cou._id}>
                                            <td>{cou.Name}</td>
                                            <td>{cou.Email}</td>
                                            <td>{cou.Phone}</td>
                                            <td>
                                                <Link className="btn btn-primary" to={"/adminUpdate/"+cou._id}>Modify</Link>
                                            </td>
                                            <td>
                                                <Link className="btn btn-danger" to={"/adminDelete/"+cou._id}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })

                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Route path="/adminUpdate" component={UpdateAdmin}/>
                <Route path="/adminDelete" component={DeleteAdmin}/>
            </Router>
        )
    }
}