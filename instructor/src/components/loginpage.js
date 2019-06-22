import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, Snackbar, CardText, Button, Textfield, Navigation} from "react-mdl";
import { Link } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import { login } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';

class loginpage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            usernameOrEmail: '',
            password: '',
            errors: {},
            isSnackbarActive: false,


        };
        this.handleLogin = this.handleLogin.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
        this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    handleValidation(){
        let errors = {};
        let formIsValid = true;

        //Username
        if(!this.state.usernameOrEmail){
            formIsValid = false;
            errors["username"] = "Cannot be empty";
        }


        else if(typeof this.state.usernameOrEmail !== "undefined"){
            if(!this.state.usernameOrEmail.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["username"] = "Only letters";
            }
        }

        //Password
        if(!this.state.password){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleLogin(event) {
        event.preventDefault();

        let values = {};
        values["usernameOrEmail"] = this.state.usernameOrEmail;
        values["password"] = this.state.password;

        if (this.handleValidation()) {

            const loginRequest = Object.assign({}, values);

            let loginErrors = {};

            login(loginRequest)
                .then(response => {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    this.props.history.push("/instructor/dashboard");
                }).catch(error => {
                    if(error.status === 401) {
                        loginErrors["loginErrors"] = 'Your Username or Password is incorrect. Please try again!';
                        this.setState({errors: loginErrors});
                        this.setState({isSnackbarActive:true});
                    } else {
                        loginErrors["loginErrors"] = error.message || 'Sorry! Something went wrong. Please try again!';
                        this.setState({errors: loginErrors});
                        this.setState({isSnackbarActive:true});
                    }
                });
            }

    }

    handleShowSnackbar() {
        this.setState({isSnackbarActive:true});
    }

    handleTimeoutSnackbar() {
        this.setState({ isSnackbarActive: false });
    }

    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Snackbar
                    active={this.state.isSnackbarActive}
                    onTimeout={this.handleTimeoutSnackbar}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}>
                    {this.state.errors["loginErrors"]}
                </Snackbar>
                <Grid className="login-grid">
                    <Cell col={6} offset={3}>
                        <Card style={{width: '100%', height: '350px', background: 'transparent',marginTop:'100px'}}>
                            <Grid className="demo-grid-1">
                                <Cell col={6}>
                                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                        <CardTitle expand style={{color: '#fff', background: 'url(https://img.freepik.com/free-vector/education-background-with-lined-icons_1416-246.jpg) bottom right 15% no-repeat #46B6AC'}}>Not yet registered?</CardTitle>
                                        <CardText>
                                            <Navigation><Link to="/register">Register</Link></Navigation>
                                        </CardText>

                                    </Card>
                                </Cell>
                                <Cell col={6} >
                                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                    <CardText expand style={{alignItems: 'flex-start', color: '#292E49'}}>
                                        <form onSubmit={this.handleLogin}>
                                            <Grid className="demo-grid-1">
                                                <Cell col={12}>
                                                    <Textfield

                                                        label="Username"
                                                        name="usernameOrEmail"
                                                        floatingLabel
                                                        style={{width: '200px'}}
                                                        error={this.state.errors["username"]}
                                                        value={this.state.usernameOrEmail}
                                                        onChange={this.onChange}
                                                    />
                                                </Cell>

                                            </Grid>

                                            <Grid className="demo-grid-1">
                                                <Cell col={12}>
                                                    <Textfield

                                                        label="Password"
                                                        name="password"
                                                        floatingLabel
                                                        style={{width: '200px'}}
                                                        type="password"
                                                        error={this.state.errors["password"]}
                                                        value={this.state.password}
                                                        onChange={this.onChange}
                                                    />
                                                </Cell>

                                            </Grid>
                                            <Button htmlType="submit" colored style={{color: '#FF512F'}}>Login</Button>
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

export default loginpage;