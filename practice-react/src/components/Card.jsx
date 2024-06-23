import React from 'react';

const Card = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.desText}</h2>
        </div>
    );
};

export default Card;