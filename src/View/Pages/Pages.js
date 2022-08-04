import React from 'react';
import InfoTop from './info-top/InfoTop';
import Navigate from './navigate/Navigate';

function Pages(props) {
    return (
        <React.Fragment>
            <InfoTop />
            <Navigate />
        </React.Fragment>
    );
}

export default Pages;