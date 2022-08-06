import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContentItems.scss'
import img1 from '../../assets/img_items.jpg'

function ContentItems(props) {
    console.log(props);
    const [img, setImg] = useState(false);

    return (
        <div className='content-items'>
            <h3><Link to='/'>{props.title}</Link></h3>
            <div className='content-inner'>
                <img src={props.img} className='img-contentitem' />
                <p>
                    <Link to='/'>{props.description}</Link>
                </p>
            </div>
        </div>
    );
}

export default ContentItems;