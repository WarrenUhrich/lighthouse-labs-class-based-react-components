import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    return (
        <button onClick={handleClick}>
            {props.name} button has been clicked {count} times!
        </button>
    );
};

export default Counter;
