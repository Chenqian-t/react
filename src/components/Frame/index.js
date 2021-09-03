import React, { Component } from 'react';
import './Frame.css';
import { Layout } from 'antd';
// import Input from '../Input';
const { Header, Footer, Sider, Content } = Layout;

export default class Frame extends Component {
    state = {
        hehe: '123',
    }
    render() {
        console.log(this);
        return (
            <>
                <Layout>
                    <Sider className='left_sider'>
                        <ul>
                            <li>shayebushi</li>
                            <li>hahah</li>
                            <li>heheheh</li>
                        </ul>
                    </Sider>
                    <Layout>
                        <Header className='header'>Header</Header>
                        <Content className='content'></Content>
                        <Footer className='footer'>Footer</Footer>
                    </Layout>
                </Layout>
            </>
        )
    }
}
