import React from 'react';
import './UserOutput.css'

const output = (props) => {
    return (
        <div className="Output">
            <p>Username: {props.username}</p>
            <p>Lorem ipsum</p>
        </div>
    )
};

export default output;