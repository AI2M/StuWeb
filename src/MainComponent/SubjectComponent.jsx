import React, { Component } from 'react';
import { DatePicker, Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class SubjectComponent extends Component {
    render() {
        return (
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
                            defaultSelectedKeys={['addSubject']}
                            defaultOpenKeys={['Subject']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="Subject" title={<span><Icon type="folder" />Subject</span>}>
                                <Menu.Item key="addSubject">Create Subject</Menu.Item>
                                <Menu.Item key="changeSubject">Edit/Delete Subject</Menu.Item>
                            </SubMenu>
                            <SubMenu key="Score" title={<span><Icon type="file" />Score</span>}>
                                <Menu.Item key="addScore">Add Score</Menu.Item>
                                <Menu.Item key="changeScore">Edit/Delete Score</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        Content
                    </Content>

                </Layout>
            </Content>
        )
    }
}

export default SubjectComponent