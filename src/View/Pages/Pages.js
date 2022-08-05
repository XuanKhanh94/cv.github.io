import React from 'react';
import Contents from './contents/Contents';
import Footer from './footer/Footer';
import InfoTop from './info-top/InfoTop';
import Navigate from './navigate/Navigate';

function Pages(props) {
    return (
        <React.Fragment>
            <InfoTop />
            <Navigate />
            <Contents />
            <Footer />
        </React.Fragment>
    );
}

export default Pages;