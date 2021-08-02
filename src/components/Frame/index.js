import React, { Component } from 'react';
import './Frame.css';
// import { Layout } from 'antd';
import Input from '../Input';
// const { Header, Footer, Sider, Content } = Layout;

export default class Frame extends Component {
    state = {
        hehe: '123',
        value: '123',
    }
    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        console.log(this);
        return (
            <>
                <Input value={this.state.value} handleInput={this.handleInput}/>
            </>
        )
    }
}
