import React, { Component } from 'react';
import { DatePicker, Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class HomeComponent extends Component {
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
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="showAnnounce" title={<span><Icon type="notification" />Announce</span>}>
                                <Menu.Item key="1">Type1</Menu.Item>
                                <Menu.Item key="2">Type2</Menu.Item>
                                <Menu.Item key="3">Type3</Menu.Item>
                            </SubMenu>
                            <SubMenu key="showScore" title={<span><Icon type="laptop" />Score</span>}>
                                <Menu.Item key="5">Subject1</Menu.Item>
                                <Menu.Item key="6">Subject2</Menu.Item>
                                <Menu.Item key="7">Subject3</Menu.Item>
                                <Menu.Item key="8">Subject4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        Content
                    </Content>

                </Layout>
            </Content>
        );
    }
}

export default HomeComponent