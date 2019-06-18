import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import '.'
// import { Dropdown,DropdownItem} from 'reactstrap';
// import {DropdownButton} from 'react-dropdown-button';

    import {BrowserRouter, Link, Route} from "react-router-dom";
import CourseMain from "./component/Courses/course.main.component";
import AdminMain from '../src/component/AdminPanel/admin.main'
import Student from '../src/component/Student/student.add.component';
import studentList from '../src/component/Student/student.view.component';
import StudentMain from '../src/component/Student/student.main';
import Admin from '../src/component/Admin/admin.main.component'
//import myCOurses from '../src/component/Student/myCourses';
import StickyFooter from 'react-sticky-footer';

import Instructor from '../src/component/Instructor/instructor.main.component'
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
                            <img src={logo} width="30" height="30" alt=""/>
                        </a>
                        {/*<Link to="/courseMain" className="navbar-brand">Admin</Link>*/}
                        <Link to="/studentList" className="navbar-brand">Admin - Student List</Link>
                        <div className="collpase navbar-collapse" style={{marginLeft: "780px"}}>
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item" style={{paddingLeft: '100px '}}>
                                    <Link to="/studentMain" className="nav-link">Student</Link>

                                </li>

                                <li className="navbar-item">
                                    <Link to="/studentAdd" className="nav-link">Student Course Registration</Link>
                                </li>
                                {/*<DropdownButton id="dropdown-basic-button" title="My Courses">*/}
                                    {/*<Dropdown.Item href="#/myCourses">Application Frameworks</Dropdown.Item>*/}
                                    {/*<Dropdown.Item href="#/action-2">Distributed Systems</Dropdown.Item>*/}
                                    {/*<Dropdown.Item href="#/action-3">Database Management</Dropdown.Item>*/}
                                {/*</DropdownButton>*/}
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={AdminMain}/>
                    <Route path="/courseMain" component={CourseMain}/>
                    <Route path="/instructorMain" component={Instructor}/>
                   <Route path="/studentMain" component={StudentMain}/>
                    <Route path="/studentAdd" component={Student}/>
                    {/*<Route path="/myCourses" component={myCOurses}/>*/}
                    <Route path="/studentList" component={studentList}/>
                    <Route path="/adminsMain" exact component={AdminMain}/>
                    <Route path="/adminMain" component={Admin}/>
                    {/*<Route path="/booking" component={bookings}/>*/}
                </div>

                <StickyFooter
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
