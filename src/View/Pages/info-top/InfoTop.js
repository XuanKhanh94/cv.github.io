import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo.svg'
import moment from 'moment';
import { Button, Input, Modal, Form, Checkbox } from 'antd';
import './InfoTop.scss'
import { AudioOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function InfoTop(props) {
    const localtion = moment().locale('vn-vi')

    const { Search } = Input;

    const [visible, setVisible] = useState(false);
    const onSearch = (value) => console.log(value);

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = (values) => {
        console.log('Finish:', values);
    };

    return (
        <React.Fragment>
            <div className='container-top'>
                <img src={logo} className='logo' />
                <div>
                    {moment().format('dddd')} {moment().format('l')}
                </div>
                <div className='btn-top'>
                    <Button className='btn-news'>Mới nhất</Button>
                    <Button className='btn-international'>International</Button>
                </div>
                <Search
                    placeholder="Tìm kiếm"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />
                <div className='btn-login-top'>

                    <UserOutlined className='icon-btn-login' />  <Button onClick={() => setVisible(true)}>Đăng nhập</Button>

                    <Modal
                        title="Đăng nhập"
                        centered
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        width={400}
                        okText='no'>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập tài khoản!',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập mật khẩu!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Mật khẩu"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Nhớ tài khoản</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" to='/'>
                                    Quên mật khẩu
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Đăng nhập
                                </Button>
                                Or <Link to='/'>Đăng ký ngay!</Link>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InfoTop;