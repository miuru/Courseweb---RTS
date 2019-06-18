import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '.'

import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseMain from "./component/Courses/course.main.component";
import AdminMain from '../src/component/AdminPanel/admin.main'
import StickyFooter from 'react-sticky-footer';

import Instructor from '../src/component/Instructor/instructor.main.component'
import Admin from '../src/component/Admin/admin.main.component'
import back from'./images/books_library_photoshop_127118_1920x1080.jpg'
const secionStyle = {
    width: '280px',
    height: '100%',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' repeat',
};

function App() {

        return (
            <BrowserRouter>

                <div className={secionStyle}>
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                        <a className="navbar-brand" href=" " target="_blank" rel="noopener noreferrer">
                            <img src={logo} width="30" height="30" alt="Sri Lanka Railways"/>
                        </a>
                        <Link to="/adminsMain" className="navbar-brand">Admin</Link>
                        <div className="collpase navbar-collapse" style={{marginLeft: "780px"}}>
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item" style={{paddingLeft: '100px '}}>
                                    <Link to="/adminMain" className="nav-link">Admin Details</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/courseMain" className="nav-link">Course Details</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/instructorMain" className="nav-link">Instructor Details</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path="/adminsMain" exact component={AdminMain}/>
                    <Route path="/courseMain" component={CourseMain}/>
                    <Route path="/instructorMain" component={Instructor}/>
                    <Route path="/adminMain" component={Admin}/>
                    {/*<Route path="/myAccount/Logout" component={Logout}/>*/}
                    {/*<Route path="/myAccount" component={MyAccount}/>*/}
                    {/*<Route path="/booking" component={bookings}/>*/}
                </div>

                <StickyFooter
                    copyrights="&copy; 2015 Copyright Text"
                    bottomThreshold={20}
                    normalStyles={{
                        backgroundColor: "#141616",
                        padding: "2rem"
                    }}
                    stickyStyles={{
                        backgroundColor: "r#141616",
                        padding: "2rem"
                    }}

                >

                </StickyFooter>
            </BrowserRouter>
        );
    }
export default App;
