import React, {Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import axios from 'axios';

export default class UpdateInstructor extends Component {

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            console.log("on route change");
            console.log("on route change")
            if (this.props.location.pathname) {
                let urlStr = this.props.location.pathname;
                let instructorID = (urlStr.split('/')[2]);
                console.log(instructorID);
                scrollToComponent(this.appDiv);
                axios.get('http://localhost:4000/instructor/' + instructorID)
                    .then(response => {
                        this.setState({
                            ID: response.data._id,
                            Name: response.data.Name,
                            Email: response.data.Email,
                            Phone: response.data.Phone,
                            course:response.data.course
                        })
                    })
                    .catch(function (error) {
                        return (error);
                    })
            }
        });
    }

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        console.log(this.props);

        this.state = {
            ID: '',
            Name: '',
            Email: '',
            Phone:'',
            Courses:[],
            course:''
        };

    }

    componentDidMount() {
        document.title = "Modify Instructor(Admin) | SliiTit";
        console.log("Modify App Mounted");
        axios.get('http://localhost:4000/course/').then(
            data => {
                this.setState({
                    Courses: data.data
                })
            }
        )

    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        });
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const newInstructor = {
            Name: this.state.Name,
            Email: this.state.Email,
            Phone:this.state.Phone,
            course:this.state.course
        };

        let urlStr = this.props.location.pathname;
        console.log(this.state.Phone);
        let instructorID = (urlStr.split('/')[2]);
        console.log(instructorID);
        axios.post(`http://localhost:4000/instructor/update/` + instructorID, newInstructor)
            .then(
                res => {
                    if(this.state.Phone.length===10) {
                        alert(`Account successfully updated.An Email has been sent to the Instructor`);
                    }
                    else{
                        alert('Enter a valid Phone Number ');
                    }
                });
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: '450px', marginTop: 10, width: 700, background: '#006B76', color: 'black',fontWeight: "bold"}}
                     ref={(section) => {
                         this.appDiv = section;
                     }}>
                    <h3 align="center"><u>Modify Instructor Details</u></h3>
                    <form onSubmit={this.onSubmit} className="form-horizontal">
                        <div className="form-group">
                            <label style={{marginLeft:'10px'}}>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label  style={{marginLeft:'10px'}}>Email : </label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.Email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label  style={{marginLeft:'10px'}}>Phone : </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.Phone}
                                onChange={this.onChangePhone}
                            />
                        </div>
                        <div className="form-group">
                            <label  style={{marginLeft:'10px'}}>Course</label>
                            <select name="course" className="form-control" onChange={this.handleInputChange} value={this.state.course}>
                                {
                                    this.state.Courses.map(sub => {
                                        return (
                                            <option key={sub._id} value={sub._id}>{sub.Name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <input style={{marginLeft: '300px',marginBottom:'5px'}} type="submit" value="UpdateUser"
                                   className="btn btn-outline-light"/>
                        </div>
                    </form>
                </div>
            </div>

        )

    }

}
