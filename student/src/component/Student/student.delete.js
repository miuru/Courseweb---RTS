import React,{Component} from 'react';
import axios from "axios";

export default class StudentDelete extends Component{
    componentDidMount() {
        document.title="Delete Student | Enigma";
    }

    static deleteStudent(id){

        axios.delete('http://localhost:4000/students/'+id)
            .then(response => {
                alert("Data successfully deleted for :"+response.data.studentId);
            });
    }

    render() {
        let urlStr = this.props.location.pathname;
        let studentId = (urlStr.split('/')[2]);
        console.log(studentId);
        StudentDelete.deleteStudent(studentId);
        let{history} = this.props;
        history.push({
            pathname:'/studentList/',
        });
        return(
            <div>
            </div>
        );
    }
}
