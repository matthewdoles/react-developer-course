import React from 'react';

const input = (props) => {
    const style = {
        height: '30px',
        width: '300px',
        margin: '20px',
        fontSize: '20px'
    }
    return (
        <div>
            <input 
                type="text" 
                onChange={props.change} 
                value={props.username} 
                style={style} />
        </div>
    )
};

export default input;