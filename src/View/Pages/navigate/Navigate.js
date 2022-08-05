import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import './Navigate.scss'

function getItem(label, key, icon, children, type) {
    console.log(icon);
    return {
        key,
        // icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Thời sự', 'sub1', <MailOutlined />, [
        getItem('Chính trị', '1'),
        getItem('Dân sinh', '2'),
        getItem('Lao động - Việc làm', '3'),
        getItem('Giao thông', '4'),
        getItem('Mekong', '5'),
        getItem('Quỹ Hy vọng', '6'),
    ]),
    getItem('Góc nhìn', 'sub2', <AppstoreOutlined />, [
        getItem('Bình luận nhiều', '7'),
        getItem('Chính trị & chính sách', '8'),
        getItem('Y tế & sức khỏe', '9'),
        getItem('Kinh doanh & quản trị', '10'),
        getItem('Giáo dục & tri thức', '11'),
        getItem('Môi trường', '12'),
        getItem('Văn hóa & lối sống', '13'),
        getItem('Covid 19', '14'),
        getItem('Tác giả', '15'),
    ]),
    getItem('Thế giới', 'sub33'
        , <SettingOutlined />,
        [
            getItem('Tư liệu', '16'),
            getItem('Phân tích', '17'),
            getItem('Người Việt 5 châu', '18'),
            getItem('Cuộc sống đó đây', '19'),
            getItem('Quân sự', '20'),
        ]),
    getItem('Video', 'sub4'
        , <SettingOutlined />,
        [
            getItem('Thời sự', '21'),
            getItem('Nhịp sống', '22'),
            getItem('Food', '23'),
            getItem('Tôi kể', '24'),
            getItem('Chuyện núi rừng', '25'),
            getItem('Pháp luật', '26'),
            getItem('Giải trí', '27'),
            getItem('Thể thao', '28'),
            getItem('Số hóa', '29'),
            getItem('Xe', '30'),
            getItem('Sức khỏe', '31'),
            getItem('Du lịch', '32'),
            getItem('Thế giới', '33'),
            getItem('Khoa học', '34'),
            getItem('Giáo dục', '35'),
            getItem('Tọa đàm kinh tế', '36'),
            getItem('Chủ đề', '37'),
            getItem('Nguy-Cơ', '38'),
        ]),
    getItem('Podcasts', 'sub5'
        , <SettingOutlined />,
        [
            getItem('VnExpress hôm nay ', '39'),
            getItem('Họ nói gì?', '40'),
            getItem('Hộp đen', '41'),
            getItem('Ly hôn', '42'),
            getItem('Thầm thì', '43'),
            getItem('Bạn ổn không?', '44'),
            getItem('Tôi trong gương', '45'),
            getItem('Điểm tin', '46'),
            getItem('Chuyện đi làm', '47'),
            getItem('Úp mở 18+', '48'),
            getItem('Tiền làm gì?', '49'),
            getItem('Nguy cơ', '50'),
        ]),
    getItem('Kinh doanh', 'sub6'
        , <SettingOutlined />,
        [
            getItem('Quốc tế', '51'),
            getItem('Doanh nghiệp', '52'),
            getItem('Chứng khoán', '53'),
            getItem('Bất động sản', '54'),
            getItem('Ebank', '55'),
            getItem('Vĩ mô', '56'),
            getItem('Tiền của tôi', '57'),
            getItem('Bảo hiểm', '58'),
            getItem('Hàng hóa', '59'),
            getItem('Vhome', '60'),
            getItem('eBox', '61'),

        ]),
    getItem('Khoa học', 'sub7'
        , <SettingOutlined />,
        [
            getItem('Khoa học trong nước', '62'),
            getItem('Tin tức', '63'),
            getItem('Phát minh', '64'),
            getItem('Ứng dụng', '65'),
            getItem('Thế giới tự nhiên', '66'),
            getItem('Thường thức', '67'),
            getItem('Sáng kiến Khoa học', '68'),

        ]),
    getItem('Giải trí', 'sub8'
        , <SettingOutlined />,
        [
            getItem('Giới sao', '69'),
            getItem('Video', '70'),
            getItem('Nhạc', '71'),
            getItem('Thời trang', '72'),
            getItem('Làm đẹp', '73'),
            getItem('Sách', '74'),
            getItem('Sân khấu - Mỹ thuật', '75'),

        ]),
    getItem('Thể thao', 'sub9'
        , <SettingOutlined />,
        [
            getItem('Bóng đá', '76'),
            getItem('Marathon', '77'),
            getItem('Lịch thi đấu', '78'),
            getItem('Tennis', '79'),
            getItem('Bundesliga', '80'),
            getItem('Các môn khác', '81'),
            getItem('Hậu trường', '82'),
            getItem('Video', '83'),
            getItem('Ảnh', '84'),
            getItem('Tường thuật', '85'),
        ]),
    getItem('Pháp luật', 'sub10'
        , <SettingOutlined />,
        [
            getItem('Hồ sơ phá án', '86'),
            getItem('Tư vấn', '87'),
            getItem('Video', '88'),
        ]),
    getItem('Giáo dục', 'sub11'
        , <SettingOutlined />,
        [
            getItem('Tin tức', '89'),
            getItem('Tuyển sinh', '90'),
            getItem('Chân dung', '91'),
            getItem('Du học', '92'),
            getItem('Học tiếng Anh', '93'),
            getItem('Trắc nghiệm', '94'),
            getItem('Giáo dục 4.0', '95'),

        ]),
    getItem('Sức khỏe', 'sub12'
        , <SettingOutlined />,
        [
            getItem('Tin tức', '96'),
            getItem('Tư vấn', '97'),
            getItem('Dinh dưỡng', '98'),
            getItem('Khỏe đẹp', '99'),
            getItem('Đàn ông', '100'),
            getItem('Các bệnh', '101'),
            getItem('Vaccine', '102'),
            getItem('Di chứng Covid', '103'),
            getItem('Di truyền', '104'),
        ]),
    getItem('Đời sống', 'sub13'
        , <SettingOutlined />,
        [
            getItem('Tổ ấm', '105'),
            getItem('Bài học sống', '106'),
            getItem('Nhà', '107'),
            getItem('Tiêu dùng', '108'),
            getItem('Cooking', '109'),

        ]),
    getItem('Du lịch', 'sub14'
        , <SettingOutlined />,
        [
            getItem('Điểm đến', '110'),
            getItem('Ẩm thực', '112'),
            getItem('Dấu chân', '113'),
            getItem('Tư vấn', '114'),
            getItem('Cẩm nang', '115'),
            getItem('Ảnh', '116'),
            getItem('Ăn và chơi', '117'),
            getItem('Mở cửa du lịch', '118'),
        ]),
    getItem('Số hóa', 'sub15'
        , <SettingOutlined />,
        [
            getItem('Công nghệ', '119'),
            getItem('Sản phẩm', '120'),
            getItem('Blockchain', '121'),
            getItem('Tech Awards 2022', '122'),
            getItem('Startup', '123'),

        ]),
    getItem('Xe', 'sub16'
        , <SettingOutlined />,
        [
            getItem('Thị trường', '124'),
            getItem('Cầm lái', '125'),
            getItem('Diễn đàn', '126'),
            getItem('V-Car', '127'),
            getItem('Thi bằng lái', '128'),
            getItem('Mua bán', '129'),
        ]),
    getItem('Ý kiến', 'sub17'
        , <SettingOutlined />,
        [
            getItem('Thời sự', '130'),
            getItem('Đời sống', '131'),

        ]),
    getItem('Tâm sự', 'sub18'
        , <SettingOutlined />,
        [
            getItem('Chuyên gia gỡ rối', '132'),
            getItem('Hẹn hò', '133'),

        ]),
    getItem('Hài', 'sub19'
        , <SettingOutlined />,
        [
            getItem('Cười', '134'),
            getItem('Đố vui', '135'),
            getItem('Chuyện lạ', '136'),
            getItem('Thú cưng', '137'),
        ]),

];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub33', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10', 'sub11', 'sub12', 'sub13', 'sub14', 'sub15', 'sub16', 'sub17', 'sub18', 'sub19'];

const Navigate = () => {
    const [openKeys, setOpenKeys] = useState(['']);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div className='container-navigate'>

            <Menu
                mode="horizontal"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                    width: '100%',
                }}
                items={items}
            />
        </div>
    );
};

export default Navigate;