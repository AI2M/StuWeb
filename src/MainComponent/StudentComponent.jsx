import React, { Component } from 'react';
import { DatePicker, Layout, Menu, Breadcrumb, Icon } from 'antd';
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
        return (
            <BrowserRouter>
                <Content style={{ padding: '0 20px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '22px 0', background: '#fff' }}>

                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['studentAdd']}
                                defaultOpenKeys={['studentAdd']}
                                style={{ height: '100%' }}
                            >
                                <Menu.Item key="studentAdd">
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
                        </Sider>
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

export default StudentComponent