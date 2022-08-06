import React from 'react';
import ContentItems from '../../../../components/content-items/ContentItems';
import './ContentLeft.scss'

function ContentLeft(props) {
    const data = {
        title: 'TP HCM muốn cấm xe khách vào nội đô',
        img: 'https://picsum.photos/200/300.jpg'
        ,
        description: 'Sở Giao thông Vận tải TP HCM đề xuất cấm ôtô khách trên 30 chỗ vào nội đô thành phố từ 6h đến 22h để giảm ùn tắc, tai nạn và hạn chế "bến cóc, xe dù',
    }
    return (
        <div>

            <ContentItems {...data} />
            <hr />
            <ContentItems {...data} />
            <hr />

            <ContentItems {...data} />
            <hr />

            <ContentItems {...data} />
            <hr />

            <ContentItems {...data} />
            <hr />

            <ContentItems {...data} />
            <hr />
            <ContentItems {...data} />
            <hr />
            <ContentItems {...data} />
            <hr />
            <ContentItems {...data} />

        </div>
    );
}

export default ContentLeft;