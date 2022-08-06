import { Button, Col, Row } from 'antd';
import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, MailOutlined, SafetyOutlined, UserSwitchOutlined, FacebookFilled } from '@ant-design/icons'

function Footer(props) {
    return (
        <React.Fragment>
            <div className='container-footer'>

                <div className='container-footer-top'>

                    <Row >
                        <Col span={4}>
                            <div>
                                <ul className='list-menu-footer'>
                                    <li className='item-menu'><Link to="/">Trang chủ</Link></li>
                                    <li className='item-menu'><Link to="/">Video</Link></li>
                                    <li className='item-menu'><Link to="/">Podcasts</Link></li>
                                    <li className='item-menu'><Link to="/">Ảnh</Link></li>
                                    <li className='item-menu'><Link to="/">Infographics</Link></li>
                                    <li className='item-menu' style={{ paddingTop: ' 15px', borderTop: ' 1px solid #e5e5e5' }}><Link to="/">Mới nhất</Link></li>
                                    <li className='item-menu'><Link to="/">Xem nhiều</Link></li>
                                    <li className='item-menu' style={{ marginBottom: '40px' }}><Link to="/">Tin nóng</Link></li>
                                </ul>
                            </div>

                        </Col>
                        <Col span={4}> <div>
                            <ul>
                                <li><Link to="/">Thời sự</Link></li>
                                <li><Link to="/">Góc nhìn</Link></li>
                                <li><Link to="/">Thế giới</Link></li>
                                <li><Link to="/">Kinh doanh</Link></li>
                                <li><Link to="/">Giải trí</Link></li>

                            </ul>
                        </div></Col>
                        <Col span={4}>
                            <div>
                                <ul>
                                    <li><Link to="/">Thể thao</Link></li>
                                    <li><Link to="/">Pháp luật</Link></li>
                                    <li><Link to="/">Giáo dục</Link></li>
                                    <li><Link to="/">Sức khỏe</Link></li>
                                    <li><Link to="/">Đời sống</Link></li>
                                    <li><Link to="/">Du lịch</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div>
                                <ul style={{ marginRight: '40px', borderRight: ' 1px solid #e5e5e5' }}>
                                    <li><Link to="/">Khoa học</Link></li>
                                    <li><Link to="/">Số hóa</Link></li>
                                    <li><Link to="/">Xe</Link></li>
                                    <li><Link to="/">Ý kiến</Link></li>
                                    <li><Link to="/">Tâm sự</Link></li>
                                    <li><Link to="/">Hài</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div style={{ marginLeft: '-20px', borderRight: ' 1px solid #e5e5e5', marginRight: '40px', }}>
                                <ul >
                                    <li><Link to="/">Rao vặt</Link></li>
                                    <li><Link to="/">Startup</Link></li>
                                    <li><Link to="/">Mua ảnh VnExpress</Link></li>
                                    <li><Link to="/">Vhome</Link></li>
                                    <li><Link to="/">eBox</Link></li>
                                    <li><Link to="/">eWork</Link></li>

                                </ul>
                            </div>
                        </Col>
                        <Col span={4}>
                            <div style={{ color: ' #757575', marginLeft: '-30px', }}>

                                <div>
                                    <p>Tải ứng dụng</p>
                                    <div className='contact-downloadapp'>

                                        <Button className='btn-VnExpress'>VnExpress</Button>
                                        <Button>International</Button>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <p>Liên hệ</p>
                                    <div className='contact-link'>
                                        <div className='contact-item'>

                                            <MailOutlined />  <Link to='/'>Tòa soạn</Link>
                                        </div>

                                        <div>
                                            <SafetyOutlined /> <Link to='/'>Quảng cáo</Link>
                                        </div>

                                        <div className='contact-item2'>
                                            <UserSwitchOutlined /> <Link to='/'>Hợp tác bản quyền</Link>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <p>Đường dây nóng</p>
                                    <div className='hotline'>

                                        <div className='footer-top-left'>
                                            <strong>083.888.0123</strong>
                                            <p>(Hà Nội)</p>
                                        </div>
                                        <div className='footer-top-right'>
                                            <strong>082.233.3555</strong>
                                            <p>(TP. Hồ Chí Minh)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className='container-footer-center'>
                    <div>
                        <span style={{ marginRight: '10px', fontSize: '16px' }}>Báo điện tử</span>  <img src={logo} />
                    </div>

                    <div>
                        <span style={{ fontSize: '16px' }}>Theo dõi VnExpress trên</span> <FacebookFilled style={{ fontSize: '30px' }} />  <TwitterOutlined style={{ fontSize: '30px' }} />  <YoutubeOutlined style={{ fontSize: '30px' }} />
                    </div>
                </div>

                <div className='container-footer-bottom'>
                    <Row>
                        <Col span={8}>
                            <p>
                                <strong>Báo tiếng Việt nhiều người xem nhất</strong> <br></br>
                                Thuộc Bộ Khoa học Công nghệ <br></br>
                                Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
                            </p>
                        </Col>
                        <Col span={8}>
                            <p>Tổng biên tập: Phạm Hiếu<br></br>
                                Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội<br></br>
                                Điện thoại: 024 7300 8899 - máy lẻ 4500
                            </p>
                        </Col>
                        <Col span={8}>
                            <p style={{ textAlign: 'right' }}>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>

                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;