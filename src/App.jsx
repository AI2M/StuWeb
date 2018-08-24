import React, { Component } from 'react';
import './App.css';
import { DatePicker, Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import HomeComponent from './MainComponent/HomeComponent'
import SubjectComponent from './MainComponent/SubjectComponent'
import AnnouncementComponent from './MainComponent/AnnouncementComponent'
import StudentComponent from './MainComponent/StudentComponent'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  NavLink
} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['navSubject']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="navHome"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="navStudent"><Link to="/Student">Student</Link></Menu.Item>
              <Menu.Item key="navSubject"><Link to="/Subject">Subject</Link></Menu.Item>
              <Menu.Item key="navAnnouncement"><Link to="/Announcement">Announcement</Link></Menu.Item>
             
 
            </Menu>

          </Header>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/Announcement" component={AnnouncementComponent} />
          <Route path="/Subject" component={SubjectComponent} />
          <Route path="/Student" component={StudentComponent} />

          <Footer style={{ textAlign: 'center' }}>
           Student-W ©2018 Created by Apotoxin
          </Footer>
        </Layout>
      </BrowserRouter>

    );
  }
}

export default App;
