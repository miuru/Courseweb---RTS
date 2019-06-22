import React from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from "react-mdl";
import { Link } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
    <div>
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="E N I G M A" scroll>
                    <Navigation>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>

                    </Navigation>
                </Header>
                <Drawer title="Welcome">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/">Our Courses</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
                <Footer size="mini">
                <FooterSection type="center" logo="Runtime Terrors">
                    <FooterLinkList>

                        <a href="#">Copyright 2018 © RTS. All Rights Reserved.</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
            </Layout>
        </div>
    </div>
  );
}

export default App;
