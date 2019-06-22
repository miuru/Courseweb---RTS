import React, { Component } from 'react';
import { Grid, Cell} from "react-mdl";
import logo from '../images/logo.png';

class homepage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt="logo"
                            className="logo"
                        />

                        <div className="banner-text">
                            <h1>E N I G M A</h1>
                            <hr/>
                            <p>Dreamers | Thinkers | Doers</p>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default homepage;