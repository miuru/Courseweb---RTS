import React, {Component} from 'react'
import { Grid, Cell,Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList} from "react-mdl";

import BackgroundSlideshow from 'react-background-slideshow'
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";

import Student from '../Student/student.add.component';
//import myCourses from '../Student/myCourses';
//import studentMain from '../Student/student.main';
//import back from "./1.jpg";


const secionStyle = {
    width: '100%',
    height: '100%',
    //backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' repeat'
};
export default class StudentMain extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={secionStyle}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">

                            </li>
                            <li className="navbar-item">

                            </li>
                        </ul>
                    </nav>
                    {/*<div style={{width:'100px' ,height:'20px'}}>*/}
                    {/*<BackgroundSlideshow style={{background:'transparent'}} images={[ back, back1, back2 ]} />*/}
                    {/*</div>*/}
                    <div style={{width: '800px'}}>
                        <h4 className='modal-header' style={{
                            marginTop: '50px',
                            marginLeft: '500px',
                            color: 'black',
                            fontFamily: 'Stencil',
                            fontSize : '55px',
                            background: '#ffc34d',
                            width: '480px',
                            borderRadius: 80
                        }} align="center">Welcome Student</h4>
                    </div>
                    <div style={{
                        marginLeft: "60px",
                        marginTop: '50px',
                        color: 'black',
                        fontFamily: 'Stencil',
                        width: '1400px'
                    }}>



                        <Link className="btn btn-outline-warning"
                              style={{width: '400px', height: '280px', color: '#8b572a', marginLeft: '60px'}}
                              to="/studentAdd"><h2 style={{marginTop: '85px'}}>ADD NEW Students</h2></Link>


                        <Link className="btn btn-outline-info"
                              style={{width: '400px', height: '280px', background: '', marginLeft: '60px'}}
                              to="/AdminPortal"><h2 style={{marginTop: '85px'}}>Student Portal</h2></Link>
                    </div>
                    <div style={{
                        marginLeft: "60px",
                        marginTop: '10px',
                        color: 'black',
                        fontFamily: 'Stencil',
                        width: '250px'
                    }}>

                    </div>

                </div>

                {/*<Route path="/" exact component={this}/>*/}
                <Route path="/studentAdd"  component={Student}/>
                {/*<Route path="/myCourse" component={myCourses}/>*/}
                {/*<Route path="/studentMain" component={Student}/>*/}
                {/*<Route path="/viewCourse" component={ViewCourse}/>*/}
            </BrowserRouter>
        );
    }
}
