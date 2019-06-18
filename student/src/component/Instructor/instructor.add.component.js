import React,{Component} from 'react';
import axios from "axios";
export default class InstructorAdd extends Component{

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
            Phone:'',
            Courses:[],
            course:''
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
            Phone: this.state.Phone,
            course: this.state.course
        };

        axios.post('http://localhost:4000/instructor/add', newIns)
            .then(res => {
                    console.log(res);
                    alert(`An email has been sent to the Instructor`);
                }
            );

        this.state= {
            Name: '',
            Email: '',
            Phone:'',
            course:''
        }
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/course/').then(
            data => {
                this.setState({
                    Courses: data.data
                })
            }
        )
    }

    render() {
        return(
            <div style={{background:'#ABB8C3'}}>
                <div className="container" style={{width:700,background:'#008B46',color:'white'}}>
                    <h3 align="center">Add new Instrucor</h3>
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
                            <label>Email address of the Instructor : </label>
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
                            <label>Course</label>
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
                            <input style={{marginLeft:"250px"}} type="submit" value="RegisterCourse" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}