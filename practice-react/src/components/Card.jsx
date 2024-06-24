import React from 'react';

const Card = (props) => {
let {title,desText}=props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{desText}</h2>
            <h3>this is h3</h3>
        </div>
    );
};

export default Card;