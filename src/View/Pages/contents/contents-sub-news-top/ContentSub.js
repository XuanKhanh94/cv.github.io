import { Row, Col } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
// import Comment from '../../../../Components/comments/Comment';
import './ContentSub.scss';
import Comment from '../../../../components/comments/Comment'
import avatar from '../../../../assets/avatar.jpg'

function ContentSub(props) {
    return (
        <div className='sub-news-top'>
            <Row>
                <Col span={8}>
                    <div className='list-sub-feature'>
                        <h3 className='title-sub'>
                            <Link to='/'>Lễ viếng ba cảnh sát chữa cháy</Link>

                        </h3>
                        <div>

                            <p className='description-sub'>
                                <Link to='/'>Đồng đội, gia đình, người dân bật khóc trong lễ viếng ba cảnh sát chữa cháy tại Nhà tang lễ Quốc gia, chiều 5/8. </Link>
                            </p>
                            <Comment />
                        </div>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='list-sub-feature'>
                        <h3 className='title-sub'>
                            <Link to='/'>Trung Quốc trừng phạt bà Pelosi</Link>

                        </h3>
                        <p className='description-sub'>
                            <Link to='/'>Bộ Ngoại giao Trung Quốc tuyên bố trừng phạt Chủ tịch Hạ viện Mỹ Nancy Pelosi với cáo buộc bà có hành động "khiêu khích" khi thăm Đài Loan.</Link>
                        </p>
                    </div>
                </Col>
                <Col span={8}>
                    <div style={{ paddingLeft: '15px', borderLeft: '1px solid #ccc' }} className='list-sub-feature item-gocnhin'>
                        <h3 className='title-gocnhin'><Link to=''>Góc nhìn</Link></h3>
                        <h3 className='title-sub'>
                            <Link to='/'>Khúc mắc giá đất</Link>

                        </h3>
                        <p className='description-sub'>
                            <Link to='/'>
                                Chỉ cần xác định giá đất của Nhà nước bằng 70-80% giá đất thị trường là đủ mức cần thiết.</Link>
                        </p>
                        <div className='info-author'>
                            <div className='meta-news'>
                                <p><Link to='/'>Đặng Hùng Võ</Link></p>
                                <Comment />
                            </div>
                            <Link to='/'>
                                <img className='avatar-author' src={avatar} />
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ContentSub;