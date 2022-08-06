import React from 'react';
import './Contenttop.scss';
import { Link } from 'react-router-dom'
import thumart from '../../../../assets/img_thumart.jpg';
// import Comment from '../../../../Components/comments/Comment';
import Comment from '../../../../components/comments/Comment'

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
                                <span>PGS Hoàng Thị Diễm Tuyết, Giám đốc Bệnh viện Phụ sản Hùng Vương, nghẹn ngào khi đề cập đến lương nhân viên y tế, tại cuộc gặp Bí thư Thành ủy Nguyễn Văn Nên, ngày 5/8.<br></br>
                                    Lương bác sĩ trẻ 7, 8 triệu đồng, làm sao sống nổi ở TP HCM, một tháng một năm, 5 năm được, nhưng 10 năm 20 năm không thể bền bỉ", bà Tuyết chia sẻ và cho rằng vấn đề lương bổng của ngành y tế bị trói buộc bởi rất nhiều chính sách, đòi hỏi từ quốc gia đến thành phố giải quyết.

                                    Bà mong thành phố có chính sách, cơ chế hỗ trợ nhân viên y tế để họ yên tâm cống hiến lâu dài, được làm việc trong môi trường an toàn, có mức lương tương đối. "Liệu chăng thành phố có những chính sách để nhân viên y tế ra khỏi thành phố có thể hãnh diện vỗ ngực nói tôi đang là nhân viên y tế TP HCM, bởi nếu nhân viên y tế nghỉ việc thì ai sẽ chăm sóc sức khỏe người dân", bà Tuyết nói.</span>
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