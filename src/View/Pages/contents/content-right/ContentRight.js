// import Search from 'antd/lib/transfer/search';
import { Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryContent from '../../../../components/category-content/CategoryContent';
import ContentItemSub from '../../../../components/content-item-sub/ContentItemSub';
import ContentItems from '../../../../components/content-items/ContentItems';
import CategorySub from '../../../../components/sub-news-category/CategorySub';
import './ContentRight.scss'

function ContentRight(props) {
    const { Search } = Input;
    const data = {
        title: 'Lập ngân sách dễ dàng với quy tắc 80/20',
        img: 'https://i1-kinhdoanh.vnecdn.net/2022/07/18/pri-174833537-1658132831-9754-1658132882.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=M34FAPzcjT1CKDe4HvDDWQ',
        description: 'Nếu việc lập ngân sách cho các khoản chi tiêu gặp khó khăn, bạn hãy thử quy tắc 80/20 trong phân bổ tiền lương hàng tháng.',
    }
    const dataCategory1 = {
        maincate: 'Kinh doanh',
        subcate1: 'Quốc tế',
        subcate2: 'Doanh nghiệp',
        subcate3: 'Chứng khoán',
        subcate4: 'Bất động sản',
        subcate5: 'Bảo hiểm',
    }
    const dataCategory2 = {
        maincate: 'Thể thao',
        subcate1: 'Bóng đá',
        subcate2: 'Tenis',
        subcate3: 'Marathon',
        subcate4: 'Lịch thi đấu',
        subcate5: 'Sự kiện',
    }
    const dataCategory3 = {
        maincate: 'Giải trí',
        subcate1: 'Giới sao',
        subcate2: 'Phim',
        subcate3: 'Nhạc',
        subcate4: 'Thời trang',
        subcate5: 'Sách',
    }

    const dataCategory4 = {
        maincate: 'Sức khỏe',
        subcate1: 'Tin tức',
        subcate2: 'Dinh dưỡng',
        subcate3: 'Khỏe đẹp',
        subcate4: 'Vaccine',
        subcate5: 'Di chứng',
    }
    const dataSub = {
        title1: 'Đại gia ngân hàng Thái tham vọng có 1,2 triệu khách Việt',
        title2: 'Coteccons có tổng giám đốc mới sau một năm rưỡi bị khuyết',
        title3: 'Nga hạ giá dầu để giành thị trường Ấn Độ',
    }
    return (
        <div className='container-right'>
            <>

                <CategoryContent {...dataCategory1} />
                <div className='content-box-category'>
                    <div className='content-with-img'>

                        <ContentItems {...data} />
                    </div>

                    <div className='content-no-img'>
                        <ContentItemSub {...data} />
                    </div>
                </div>
                <CategorySub {...dataSub} />
            </>
            <>

                <CategoryContent {...dataCategory2} />
                <div className='content-box-category'>
                    <div className='content-with-img'>

                        <ContentItems {...data} />
                    </div>

                    <div className='content-no-img'>
                        <ContentItemSub {...data} />
                    </div>
                </div>
                <CategorySub {...dataSub} />

            </>
            <>

                <CategoryContent {...dataCategory3} />
                <div className='content-box-category'>
                    <div className='content-with-img'>

                        <ContentItems {...data} />
                    </div>

                    <div className='content-no-img'>
                        <ContentItemSub {...data} />
                    </div>
                </div>
                <CategorySub {...dataSub} />

            </>
            <>

                <CategoryContent {...dataCategory4} />
                <div className='content-box-category'>
                    <div className='content-with-img'>

                        <ContentItems {...data} />
                    </div>

                    <div className='content-no-img'>
                        <ContentItemSub {...data} />
                    </div>
                </div>
                <CategorySub {...dataSub} />

            </>
            <>

                <CategoryContent {...dataCategory4} />
                <div className='content-box-category'>
                    <div className='content-with-img'>

                        <ContentItems {...data} />
                    </div>

                    <div className='content-no-img'>
                        <ContentItemSub {...data} />
                    </div>
                </div>
                <CategorySub {...dataSub} />

            </>
            <div className='search-info-school'>
                <img src='https://s1.vnecdn.net/vnexpress/restruct/i/v631/graphics/box-tracuu2.png' />
                <h3><Link to='/'>Tra ngành, trường phù hợp điểm THPT</Link></h3>
                <Search placeholder="input search text" enterButton style={{
                    width: 304,
                }} />
            </div>
        </div>
    );
}

export default ContentRight;