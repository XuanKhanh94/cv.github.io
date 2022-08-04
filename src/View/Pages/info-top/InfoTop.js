import React from 'react';
import logo from '../../../assets/logo.svg'
import moment from 'moment';
import { Button, Input } from 'antd';
import './InfoTop.scss'
import { AudioOutlined, UserOutlined } from '@ant-design/icons';

function InfoTop(props) {
    const localtion = moment().locale('vn-vi')

    const { Search } = Input;
    // const suffix = (
    //     <AudioOutlined
    //         style={{
    //             fontSize: 16,
    //             color: '#1890ff',
    //         }}
    //     />
    // );

    const onSearch = (value) => console.log(value);
    return (
        <React.Fragment>
            <div className='container-top'>
                <img src={logo} className='logo' />
                <div>
                    {moment().format('dddd')}{moment().format('dd/mm/yyyy')}
                </div>
                <div className='btn-top'>
                    <Button className='btn-news'>Mới nhất</Button>
                    <Button className='btn-international'>International</Button>
                </div>
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                />
                <div className='btn-login-top'>

                    <UserOutlined className='icon-btn-login' />  <Button>Đăng nhập</Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default InfoTop;