import React, { Component } from 'react';
import { DatePicker, Layout, Menu, Breadcrumb, Icon, Slider } from 'antd';
import 'antd/dist/antd.css';
import AddStudentComponent from '../SubComponent/Student/AddStudent.jsx'
import ChangeStudentComponent from '../SubComponent/Student/ChangeStudent.jsx'
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class StudentComponent extends Component {
    render() {
        var m=0;
        if (m==1){
            return(
                <BrowserRouter>
                <Content style={{ padding: '0 20px'}}>
                    <Layout style={{ padding: '22px 0', background: '#fff' }}>
                        <Sider style={{ marginBottom:'20px' }}>
                        <StudentMenu themecolor="light"></StudentMenu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route exact path="/Student" component={AddStudentComponent} />
                            <Route path="/Student/addStudent" component={AddStudentComponent} />
                            <Route path="/Student/changeStudent" component={ChangeStudentComponent} />
                        </Content>
                    </Layout>
                </Content>
            </BrowserRouter>
            )
        }

        return (
            <BrowserRouter>
                <Content style={{ padding: '0 20px'}}>
                    <Layout style={{ padding: '22px 0', background: '#fff' }}>
                        <div style={{ marginBottom:'20px' }}>
                        <StudentMenu themecolor="dark"></StudentMenu>
                        </div>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route exact path="/Student" component={AddStudentComponent} />
                            <Route path="/Student/addStudent" component={AddStudentComponent} />
                            <Route path="/Student/changeStudent" component={ChangeStudentComponent} />
                        </Content>
                    </Layout>
                </Content>
            </BrowserRouter>
        );
    }
}
const StudentMenu=(props)=> {
        return(
            <Menu
            theme= {props.themecolor}
            mode="inline"
            defaultSelectedKeys={['studentAdd']}
            defaultOpenKeys={['studentAdd']}
            style={{ height: '100%'}}
        >
            <Menu.Item key="studentAdd" style={{color:'green'}}>
                <Link to="/Student/addStudent">
                    <Icon type="user-add" style={{fontSize: 20 }} />
                    Add Student
            </Link>
            </Menu.Item>
            <Menu.Item key="studentChange">
                <Link to="/Student/changeStudent">
                    <Icon type="edit"  style={{fontSize: 20 }} />
                    Edit/Delete Student
            </Link>
            </Menu.Item>
        </Menu>
        )
}

export default StudentComponent