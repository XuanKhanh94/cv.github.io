import React from 'react';
import { Link } from 'react-router-dom';
import './ContentItemSub.scss'

function ContentItemSub(props) {
    console.log(props);
    return (
        <div className='content-items'>
            <h3><Link to='/'>{props.title}</Link></h3>
            <div className='content-inner'>
                <p>
                    <Link to='/'>{props.description}</Link>
                </p>
            </div>
        </div>
    );
}

export default ContentItemSub;