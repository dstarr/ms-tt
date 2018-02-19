import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => {


    let message = props.message;
    if(message === undefined)
        message = "Hello React";

    return (
        <h1>
            {message}
        </h1>
    );
};

Hello.propTypes = {
    message: PropTypes.string
};

export default Hello;