import React from 'react';
import {Switch, Route} from "react-router-dom";

import homepage from "./homepage";
import loginpage from './loginpage';
import registerpage from './registerpage';
import dashboard from './instructor/dashboard';

const Main = () => (
    <Switch>
        <Route exact path="/" component={homepage} />
        <Route exact path="/login" component={loginpage} />
        <Route exact path="/register" component={registerpage} />
        <Route exact path="/instructor/dashboard" component={dashboard} />
    </Switch>
)

export default Main;