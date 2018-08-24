import React, { Component } from 'react';
import { DatePicker, Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class AnnouncementComponent extends Component {
    render() {
        return (
            <Content style={{ padding: '0 20px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '22px 0', background: '#fff' }}>

                    <Sider width={250} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            // defaultSelectedKeys={['1']}
                            defaultOpenKeys={['announceAdd']}
                            style={{ height: '100%' }}
                        >
                            <Menu.Item key="announceAdd">
                                <Icon type="plus" />
                                <span>Add Announcement</span>
                            </Menu.Item>
                            <Menu.Item key="announceChange">
                                <Icon type="edit" />
                                <span>Edit/Delete Announcement</span>
                            </Menu.Item>
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

export default AnnouncementComponent