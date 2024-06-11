import React, { useState } from 'react';

const Content = () => {
    const [count, setCount] = useState(0);  

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);  
    };

    return (
        <main>
            <h2 style={{ textAlign: 'center', color: "red" }}>Content</h2>  
            <p>This is the content area.</p>
            <p>count: {count}</p>  
            <button style={{ color: "green" }} onClick={increment}>increment</button>
            <button style={{ color: "red" }} onClick={decrement}>decrement</button>
        </main>
    );
};

export default Content;
