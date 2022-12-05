import React from 'react';
import './Banner.css';

const Banner = (props) => {

    return (
        <div className="banner">
            {props.name}
        </div>
    )
}

export default Banner;