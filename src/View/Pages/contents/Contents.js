import React from 'react';
import ContentSub from './contents-sub-news-top/ContentSub';
import Contenttop from './contents-top/Contenttop';
import './Contents.scss';

function Contents(props) {
    return (
        <React.Fragment>
            <div className='container-content'>
                <Contenttop />
                <ContentSub />
            </div>
        </React.Fragment>
    );
}

export default Contents;