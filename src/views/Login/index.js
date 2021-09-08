import React from 'react';
import './Login.css';
import { Card, Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../actions/user';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const userInfo = useSelector(state => ({ ...state.user }));
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        dispatch(getUserInfo(values));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        userInfo.isLogin ? <Redirect to='/home' /> :
        <div className="login">
            <div className="login_box center_box">
                <Card title="登录" hoverable style={{ height: '100%' }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 6,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" loading={userInfo.isLoading}>
                                登录
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default Login