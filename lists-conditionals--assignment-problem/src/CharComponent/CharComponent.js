import React from 'react';
import './CharComponent.css'

const char = (props) => {
    return (
        <div onClick={props.click} className="Char">
           {props.char}
        </div>
    )
};

export default char;