import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryContent.scss'

function CategoryContent(props) {
    return (
        <React.Fragment >
            {props ?

                <div className='category-content'>
                    <h2 className='parent-cate'><Link to='/'>{props.maincate}</Link></h2>
                    <span><Link to='/'>{props.subcate1}</Link></span>
                    <span><Link to='/'>{props.subcate2}</Link></span>
                    <span><Link to='/'>{props.subcate3}</Link></span>
                    <span><Link to='/'>{props.subcate4}</Link></span>
                    <span><Link to='/'>{props.subcate5}</Link></span>
                </div>
                : {}
            }
        </React.Fragment>
    );
}
export default CategoryContent;