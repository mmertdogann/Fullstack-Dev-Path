import React from 'react';
//props
//state
//children
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid rgba(128,0,255,0.25)', height: '800px'}}>
            {props.children}
        </div>
    )
};


export default Scroll;