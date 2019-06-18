import React, {Component} from 'react'

import BackgroundSlideshow from 'react-background-slideshow'
import {BrowserRouter as BrowserRouter, Route, Link} from "react-router-dom";
import CourseMain from '../Courses/course.add.component';
import Instructor from '../Instructor/instructor.add.component';
import Student from '../Student/student.add.component';
import studentMain from '../Student/student.main';
import back from "./1.jpg";
import back1 from './2.jpg';
import back2 from './wall.jpg';

const secionStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' repeat'
};
export default class AdminMain extends Component {
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
                        <h3 className='modal-header' style={{
                            marginTop: '50px',
                            marginLeft: '500px',
                            color: 'black',
                            fontFamily: 'Stencil',
                            fontSize : '55px',
                            background: 'Hue',
                            width: '480px',
                            borderRadius: 80
                        }} align="center">Welcome Admin</h3>
                    </div>
                    <div style={{
                        marginLeft: "60px",
                        marginTop: '50px',
                        color: 'black',
                        fontFamily: 'Stencil',
                        width: '1400px'
                    }}>

                        <Link className="btn btn-outline-danger "
                              style={{
                                  width: '400px',
                                  height: '280px',
                                  background: '',
                                  marginLeft: '60px',
                                  marginTop: '30px'
                              }} to="/courseAdd"><h2 style={{marginTop: '85px'}}>ADD NEW COURSES</h2></Link>

                        <Link className="btn btn-outline-warning"
                              style={{width: '400px', height: '280px', color: '#8b572a', marginLeft: '60px'}}
                              to="/instructorAdd"><h2 style={{marginTop: '85px'}}>ADD NEW INSTRUCTORS</h2></Link>


                        <Link className="btn btn-outline-info"
                              style={{width: '400px', height: '280px', background: '', marginLeft: '60px'}}
                              to="/AdminPortal"><h2 style={{marginTop: '85px'}}>ADMIN PORTAL</h2></Link>
                    </div>
                    <div style={{
                        marginLeft: "60px",
                        marginTop: '10px',
                        color: 'black',
                        fontFamily: 'Stencil',
                        width: '250px'
                    }}>
                        <Link className="btn btn-outline-light"
                              style={{width: '700px', height: '80px', color: '#000000', marginLeft: '400px'}}
                              to="/notifications"><h2 style={{}}>MAKE NOTIFICATIONS</h2></Link>
                    </div>

                </div>

                {/*<Route path="/" exact component={this}/>*/}
                <Route path="/courseAdd"  component={CourseMain}/>
                <Route path="/instructorAdd" component={Instructor}/>
                {/*<Route path="/studentMain" component={Student}/>*/}
                {/*<Route path="/viewCourse" component={ViewCourse}/>*/}
            </BrowserRouter>
        );
    }
}
