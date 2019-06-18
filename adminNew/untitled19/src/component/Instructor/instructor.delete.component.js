import React,{Component} from 'react';
import axios from "axios";

export default class InstructorDelete extends Component{
    componentDidMount() {
        document.title="Delete Instructor | SliiTit";
    }

    static deleteInstructorFromDB(id){

        axios.delete('http://localhost:4000/instructor/'+id)
            .then(response => {
                alert("Data successfully deleted for :"+response.data.Name);
            });
    }

    render() {
        let urlStr = this.props.location.pathname;
        let instructorId = (urlStr.split('/')[2]);
        console.log(instructorId);
        InstructorDelete.deleteInstructorFromDB(instructorId);
        let{history} = this.props;
        history.push({
            pathname:'/instructorMain/',
        });
        return(
            <div>
            </div>
        );
    }
}