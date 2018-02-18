import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = (props) => {

    const style404 = {
        fontSize: 72,
        fontWeight: 'bold'
    };

    return (
        <div style={{textAlign:'center' }}>
            <h1>Page not found</h1>
            <div style={style404}>404</div>
            <img src={'/assets/404lost.jpg'} />
        </div>
    );
};

PageNotFound.propTypes = {
    text: PropTypes.string
};

export default PageNotFound;