import React,{Component} from 'react';
import axios from "axios";

export default class AdminDelete extends Component{
    componentDidMount() {
        document.title="Delete Admin | SliiTit";
    }

    static deleteAdminFromDB(id){

        axios.delete('http://localhost:4000/admin/'+id)
            .then(response => {
                alert("Data successfully deleted for :"+response.data.Name);
            });
    }

    render() {
        let urlStr = this.props.location.pathname;
        let adminId = (urlStr.split('/')[2]);
        console.log(adminId);
        AdminDelete.deleteAdminFromDB(adminId);
        let{history} = this.props;
        history.push({
            pathname:'/adminMain/',
        });
        return(
            <div>
            </div>
        );
    }
}