import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySub.scss'
function CategorySub(props) {
    return (
        <div className='category-sub'>
            <Row>
                <Col span={8}>
                    <div className='items-category-sub'>
                        <p>
                            <Link to='/'>{props.title1}</Link>
                        </p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='items-category-sub'>
                        <p>
                            <Link to='/'>{props.title2}</Link>
                        </p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className='items-category-sub'>
                        <p>
                            <Link to='/'>{props.title3}</Link>
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CategorySub;