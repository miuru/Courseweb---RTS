import React,{Component} from 'react';
import axios from "axios";
export default class CourseAdd extends Component{

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            Name: '',
            Code: '',
        }
    };

    onChangeName(e){
        this.setState({
            Name  : e.target.value
        });
    }

    onChangeCode(e){
        this.setState({
            Code:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const newCourse={
            Name: this.state.Name,
            Code: this.state.Code,
        };

        axios.post('http://localhost:4000/course/add', newCourse)
            .then(res => {
                    console.log(res);
                    alert(`Course Name: ${res.data.Name} ,: ID ${res.data._id}`);
                }
            );

        this.state= {
            Name: '',
            Code: '',
        }
    }

    componentDidMount() {
        document.title="Add Course | SLIIT";
    }

    render() {
        return(
            <div style={{background:'#ABB8C3'}}>
                <div className="container" style={{width:700,background:'#008B46',color:'white'}}>
                    <h3 align="center">Add new Course</h3>
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
                            <label>Course Code : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Code || ''}
                                onChange={this.onChangeCode}
                            />
                        </div>
                        <div className="form-group" style={{marginLeft:'250px'}}>
                            <input type="submit" value="RegisterCourse" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}