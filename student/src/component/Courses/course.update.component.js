import React, {Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import axios from 'axios';

export default class UpdateCourse extends Component {

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            console.log("on route change");
            console.log("on route change")
            if (this.props.location.pathname) {
                let urlStr = this.props.location.pathname;
                let courseID = (urlStr.split('/')[2]);
                console.log(courseID);
                scrollToComponent(this.appDiv);
                axios.get('http://localhost:4000/course/' + courseID)
                    .then(response => {
                        this.setState({
                            ID: response.data._id,
                            Name: response.data.Name,
                            Code: response.data.Code
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
        this.onChangeCode = this.onChangeCode.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        console.log(this.props);

        this.state = {
            ID: '',
            Name: '',
            Code: ''
        };

    }

    componentDidMount() {
        document.title = "Modify Course(Admin) | SliiTit";
        console.log("Modify App Mounted");

    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeCode(e) {
        this.setState({
            Code: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newCourse = {
            Name: this.state.Name,
            Code: this.state.Code
        };
        let urlStr = this.props.location.pathname;
        let courseId = (urlStr.split('/')[2]);
        console.log(courseId);
        axios.post(`http://localhost:4000/course/update/` + courseId, newCourse)
            .then(
                res => {
                    alert(`Data of ID : ${res.data._id}, Name : ${res.data.Name}, successfully updated.`);
                });
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: '450px', marginTop: 10, width: 700, background: 'black', color: 'white'}}
                     ref={(section) => {
                         this.appDiv = section;
                     }}>
                    <h3 align="center"><u>Modify Course Details</u></h3>
                    <form onSubmit={this.onSubmit} className="form-horizontal">
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Name}
                                onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Code : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.Code}
                                onChange={this.onChangeCode}
                            />
                        </div>

                        <div className="form-group">
                            <input style={{marginLeft: '300px'}} type="submit" value="UpdateUser"
                                   className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>

        )

    }

}
