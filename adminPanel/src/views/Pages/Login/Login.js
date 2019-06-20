import React, { Component } from 'react';
import { login } from '../../../util/APIUtils';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormFeedback, Alert } from 'reactstrap';
import { ACCESS_TOKEN } from '../../../constants';
import classname from 'classnames';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      usernameOrEmail: '',
      password: '',
      errors: {},
      visibleError: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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

  handleSubmit(e){
    this.setState({ errors: {}});

    e.preventDefault();

    console.log(this.state);

    if(this.handleValidation() === true){
      const loginRequest = Object.assign({}, this.state);

      let loginErrors = {};

      login(loginRequest)
        .then(response => {
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          this.props.onLogin();
        }).catch(error => {
        if(error.status === 401) {
          loginErrors["loginErrors"] = 'Your Username or Password is incorrect. Please try again!';
          this.setState({errors: loginErrors});
          this.setState({visibleError:true}, () => {
            window.setTimeout(() => {
              this.setState({visibleError:false})
            },3000);
          });
        } else {
          loginErrors["loginErrors"] = error.message || 'Sorry! Something went wrong. Please try again!';
          this.setState({errors: loginErrors});
          this.setState({visibleError:true}, () => {
            window.setTimeout(() => {
              this.setState({visibleError:false})
            },3000);
          });
        }

      });
    }


  }
  render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>

                      <Alert color="danger" isOpen={this.state.visibleError}>
                        {this.state.errors["loginErrors"]}
                      </Alert>

                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>

                      <InputGroup className={classname("form-group mb-3" , {'has-error':this.state.errors["password"]})}>

                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={this.state.errors["username"]} type="text" placeholder="Username" autoComplete="username" name="usernameOrEmail" value={this.state.username} onChange={this.onChange}/>
                        <FormFeedback>{this.state.errors["username"]}</FormFeedback>
                      </InputGroup>



                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={this.state.errors["password"]} type="password" placeholder="Password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.onChange} />
                        <FormFeedback>{this.state.errors["password"]}</FormFeedback>
                      </InputGroup>

                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" htmlType={"submit"}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link"  className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({ // set by react-router
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
