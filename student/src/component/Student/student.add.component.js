import React,{Component} from 'react';
import axios from "axios";
export default class StudentAdd extends Component{

    constructor(props){
        super(props);

        this.onChangefirstname = this.onChangefirstname.bind(this);
        this.onChangemiddlename = this.onChangemiddlename.bind(this);
        this.onChangelastname = this.onChangelastname.bind(this);
        this.onChangenic = this.onChangenic.bind(this);
        this.onChangestudentId = this.onChangestudentId.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangeDegree = this.onChangeDegree.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMobileNum = this.onChangeMobileNum.bind(this);
        this.onChangeTelephoneNum = this.onChangeTelephoneNum.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangePresentAddr = this.onChangePresentAddr.bind(this);
        this.onChangePermentAddr = this.onChangePermentAddr.bind(this);
        this.onChangeEmgPer = this.onChangeEmgPer.bind(this);
        this.onChangeEmgPhone = this.onChangeEmgPhone.bind(this);
        this.onChangehighSchool = this.onChangehighSchool.bind(this);
        this.onChangeextra = this.onChangeextra.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            firstname: '',
            middlename: '',
            lastname:'',
            nic:'',
            studentId:'',
            level:'',
            // degree:'',
            email:'',
            mobileNum:'',
            telephoneNum:'',
            dob:'',
            presentAddress:'',
            permenentAddress:'',
            inCaseEmg:'',
            emgPhone:'',
            highSchool:'',
            extra:'',
            Courses:[],
            course:''
        }
    };

    onChangefirstname(e) {
        this.setState({
            firstname  : e.target.value
        });
    }
    onChangemiddlename(e) {
        this.setState({
            middlename  : e.target.value
        });
    }
    onChangelastname(e) {
        this.setState({
            lastname  : e.target.value
        });
    }
    onChangenic(e) {
        this.setState({
            nic  : e.target.value
        });
    }
    onChangestudentId(e) {
        this.setState({
            studentId  : e.target.value
        });
    }
    onChangeLevel(e) {
        this.setState({
            level  : e.target.value
        });
    }
    onChangeDegree(e) {
        this.setState({
            course  : e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email  : e.target.value
        });
    }
    onChangeMobileNum(e) {
        this.setState({
            mobileNum  : e.target.value
        });
    }
    onChangeTelephoneNum(e) {
        this.setState({
            telephoneNum  : e.target.value
        });
    }
    onChangeDob(e) {
        this.setState({
            dob  : e.target.value
        });
    }
    onChangePresentAddr(e) {
        this.setState({
            presentAddress  : e.target.value
        });
    }
    onChangePermentAddr(e) {
        this.setState({
            permenentAddress  : e.target.value
        });
    }
    onChangeEmgPer(e) {
        this.setState({
            inCaseEmg  : e.target.value
        });
    }
    onChangeEmgPhone(e) {
        this.setState({
            emgPhone  : e.target.value
        });
    }
    onChangehighSchool(e) {
        this.setState({
            highSchool  : e.target.value
        });
    }
    onChangeextra(e) {
        this.setState({
            extra  : e.target.value
        });
    }




    onSubmit(e) {
        e.preventDefault();

        const studentObj = {
            firstname: this.state.firstname,
            middlename: this.state.middlename,
            lastname: this.state.lastname,
            nic: this.state.nic,
            studentId: this.state.studentId,
            level: this.state.level,
            course: this.state.course,
            email: this.state.email,
            mobileNum: this.state.mobileNum,
            telephoneNum: this.state.telephoneNum,
            dob: this.state.dob,
            presentAddress: this.state.presentAddress,
            permenentAddress: this.state.permenentAddress,
            inCaseEmg: this.state.inCaseEmg,
            emgPhone: this.state.emgPhone,
            highSchool: this.state.highSchool,
            extra: this.state.extra
        };
        console.log(this.state.course);
        axios.post('http://localhost:4000/students/Insert', studentObj)
            .then(res =>
                console.log(res.data));

        this.setState({
            firstname: '',
            middlename: '',
            lastname:'',
            nic:'',
            studentId:'',
            level:'',
            // degree:'',
            email:'',
            mobileNum:'',
            telephoneNum:'',
            dob:'',
            presentAddress:'',
            permenentAddress:'',
            inCaseEmg:'',
            emgPhone:'',
            highSchool:'',
            extra:'',
            course:''
        })
    }
    //     this.state= {
    //         firstname: '',
    //         middlename: '',
    //         lastname:'',
    //         nic:'',
    //         studentId:'',
    //         level:'',
    //         degree:'',
    //         email:'',
    //         mobileNum:'',
    //         telephoneNum:'',
    //         dob:'',
    //         presentAddress:'',
    //         permenentAddress:'',
    //         inCaseEmg:'',
    //         emgPhone:'',
    //         highSchool:'',
    //         extra:''
    //     }
    // }
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
            <div style={{background:'#d64161'}}>
                <div className="container" style={{width:700,background:'#ffad33',color:'black'}}>
                    <h3 align="center">Add new Student</h3>
                    <form onSubmit={this.onSubmit}>
                        <h5 align="left">Basic Details</h5>
                        <div className="container" style={{width:450,background:'#ffc266',color:'black'}}>
                            <p align="left">FullName</p>
                        <div className="form-group">
                            <label>First Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.firstname}
                                onChange={this.onChangefirstname}
                            />
                        </div>
                        <div className="form-group">
                            <label>Middle Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.middlename}
                                onChange={this.onChangemiddlename}
                            />
                        </div>
                        <div className="form-group">
                        <label>Last Name  : </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangelastname}
                        />
                    </div>
                        </div>
                        <div className="form-group">
                            <label>NIC  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.nic}
                                onChange={this.onChangenic}
                            />
                        </div>
                        <div className="form-group">
                            <label>Student ID : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.studentId}
                                onChange={this.onChangestudentId}
                            />
                        </div>
                        <div className="form-group">
                            <label>Level: </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.level}
                                onChange={this.onChangeLevel}
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
                            <label>Email : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Mobile number  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.mobileNum}
                                onChange={this.onChangeMobileNum}
                            />
                        </div>
                        <div className="form-group">
                            <label>Telephone number  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.telephoneNum}
                                onChange={this.onChangeTelephoneNum}
                            />
                        </div>
                        <div className="form-group">
                            <label>Birthday  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.dob}
                                onChange={this.onChangeDob}
                            />
                        </div>
                        <div className="form-group">
                            <label>Present address  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.presentAddress}
                                onChange={this.onChangePresentAddr}
                            />
                        </div>
                        <div className="form-group">
                            <label>Permanent Address  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.permenentAddress}
                                onChange={this.onChangePermentAddr}
                            />
                        </div>
                        <div className="container" style={{width:450,background:'#ffc266',color:'black'}}>
                            <p align="left">Emergency Contact</p>
                        <div className="form-group">
                            <label>Emergency contact  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.inCaseEmg}
                                onChange={this.onChangeEmgPer}
                            />
                        </div>
                        <div className="form-group">
                            <label>Emergency contact Phone number  : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.emgPhone}
                                onChange={this.onChangeEmgPhone}
                            />
                        </div>
                        </div>
                        <div className="form-group">
                            <label>High School : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.highSchool}
                                onChange={this.onChangehighSchool}
                            />
                        </div>
                        <div className="form-group">
                            <label>Extracurricular : </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.extra}
                                onChange={this.onChangeextra}
                            />
                        </div>
                        <div className="form-group">
                            <input style={{marginLeft:"250px"}} type="submit" value="Enroll with course" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
