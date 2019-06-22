import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardActions, CardText, Button, Textfield, Navigation} from "react-mdl";
import { Link } from 'react-router-dom';
import 'react-mdl/extra/material.css';

class registerpage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="login-grid">
                    <Cell col={6} offset={3}>
                        <Card style={{width: '100%', height: '500px', background: 'transparent',marginTop:'100px'}}>
                            <Grid className="demo-grid-1">
                                <Cell col={6}>
                                    <Card shadow={0} style={{width: '320px', height: '400px', margin: 'auto'}}>
                                        <CardTitle expand style={{color: '#fff', background: 'url(https://img.freepik.com/free-vector/education-background-with-lined-icons_1416-246.jpg) bottom right 15% no-repeat #46B6AC'}}>Already a member?</CardTitle>
                                        <CardText>
                                            <Navigation><Link to="/login">Login</Link></Navigation>
                                        </CardText>

                                    </Card>
                                </Cell>
                                <Cell col={6} >
                                    <Card shadow={0} style={{width: '320px',height: '400px', margin: 'auto'}}>

                                        <CardText expand style={{alignItems: 'flex-start', color: '#292E49'}}>
                                            <form onSubmit={this.loginRequested}>
                                                <Grid className="demo-grid-1">
                                                    <Cell col={12}>
                                                        <Textfield
                                                            onChange={() => {}}
                                                            label="Email"
                                                            floatingLabel
                                                            style={{width: '200px'}}
                                                            type="email"

                                                        />
                                                    </Cell>

                                                </Grid>

                                                <Grid className="demo-grid-1">
                                                    <Cell col={12}>
                                                        <Textfield
                                                            onChange={() => {}}
                                                            label="Username"
                                                            floatingLabel
                                                            style={{width: '200px'}}
                                                        />
                                                    </Cell>

                                                </Grid>

                                                <Grid className="demo-grid-1">
                                                    <Cell col={12}>
                                                        <Textfield
                                                            onChange={() => {}}
                                                            label="Password"
                                                            floatingLabel
                                                            style={{width: '200px'}}
                                                            type="password"
                                                        />
                                                    </Cell>

                                                </Grid>
                                                <Button colored style={{color: '#FF512F'}}>Register</Button>
                                            </form>
                                        </CardText>

                                    </Card>
                                </Cell>

                            </Grid>

                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default registerpage;