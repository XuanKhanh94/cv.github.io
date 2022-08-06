import React from 'react';
import ContentItems from '../../../components/content-items/ContentItems';
import ContentLeft from './content-left/ContentLeft';
import ContentRight from './content-right/ContentRight';
import ContentSub from './contents-sub-news-top/ContentSub';
import Contenttop from './contents-top/Contenttop';
import './Contents.scss';

function Contents(props) {

    return (
        <React.Fragment>
            <div className='container-content'>
                <Contenttop />
                <ContentSub />
                <div className='content-left-right'>
                    <div className='content-left'>
                        <ContentLeft />
                    </div>

                    <div className='content-right'>
                        <ContentRight />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contents;