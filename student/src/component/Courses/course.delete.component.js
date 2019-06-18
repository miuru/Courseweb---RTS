import React,{Component} from 'react';
import axios from "axios";

export default class CourseDelete extends Component{
    componentDidMount() {
        document.title="Delete Course | SliiTit";
    }

    static deleteTrainFromDB(id){

        axios.delete('http://localhost:4000/course/'+id)
            .then(response => {
                alert("Data successfully deleted for :"+response.data.Name);
            });
    }

    render() {
        let urlStr = this.props.location.pathname;
        let courseId = (urlStr.split('/')[2]);
        console.log(courseId);
        CourseDelete.deleteTrainFromDB(courseId);
        let{history} = this.props;
        history.push({
            pathname:'/courseMain/',
        });
        return(
            <div>
            </div>
        );
    }
}