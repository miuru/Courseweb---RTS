import React,{Component} from 'react';
import axios from "axios";
export default class AdminAdd extends Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Name: '',
            Email: '',
            Phone:''
        }
    };

    onChangeName(e){
        this.setState({
            Name  : e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            Email:e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            Phone : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newIns={
            Name: this.state.Name,
            Email: this.state.Email,
            Phone: this.state.Phone
        };
        if(this.state.Phone.length===10) {
            axios.post('http://localhost:4000/admin/add', newIns)
                .then(res => {
                        console.log(res);
                        alert(`Admin added . An email has been sent to the admin`);
                    }
                );

            this.state= {
                Name: '',
                Email: '',
                Phone:''
            }
        }
        else{
            alert('Please add a valid phone number . ')
        }
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div style={{background:'#ABB8C3'}}>
                <div className="container" style={{width:700,background:'#006B76',color:'white'}}>
                    <h3 align="center">Add new Admin</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Name || ''}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email address of the Admin : </label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.Email || ''}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone  : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.Phone || ''}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <input style={{marginLeft:"250px"}} type="submit" value="RegisterAdmin" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}