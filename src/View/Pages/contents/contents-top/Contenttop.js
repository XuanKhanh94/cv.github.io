import React from 'react';
import './Contenttop.scss';
import { Link } from 'react-router-dom'
import thumart from '../../../../assets/img_thumart.jpg';
import Comment from '../../../../Components/comments/Comment';


function Contenttop(props) {
    return (
        <React.Fragment>
            <div className='container-contenttop'>
                <div className='wrapper-topstory'>
                    <div className='thumb-art'>
                        <Link to='/'>
                            <img src={thumart} className='img-contenttop' />
                        </Link>
                    </div>
                    <div className='items-topstory'>

                        <h3 className='title-news'>
                            <Link to='/'>
                                <span>Giám đốc bệnh viện khóc khi nói về thu nhập của nhân viên</span>
                            </Link>
                        </h3>

                        <p className='description'>
                            <Link to='/'>
                                <span>PGS Hoàng Thị Diễm Tuyết, Giám đốc Bệnh viện Phụ sản Hùng Vương, nghẹn ngào khi đề cập đến lương nhân viên y tế, tại cuộc gặp Bí thư Thành ủy Nguyễn Văn Nên, ngày 5/8.</span>
                            </Link>
                        </p>
                        <div className='meta-news'>
                            <p ><Link to='/'>Sức khỏe</Link></p>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contenttop;