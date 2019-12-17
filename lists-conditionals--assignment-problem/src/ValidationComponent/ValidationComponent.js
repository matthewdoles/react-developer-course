import React from 'react';

const validation = (props) => {
    let results = <p>Text too short</p>
    if(props.textLength >= 5) {
        results = (
            <p>Text long enough</p>
        )
    }

    return (
        <div>
           {results}
        </div>
    )
};

export default validation;