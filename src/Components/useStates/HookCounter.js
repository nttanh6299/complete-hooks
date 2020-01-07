import React, { useState } from 'react';

export const HookCounter = () => {
    const [count, setCount] = useState(0);

    return ( 
    <div className="container">
        <button onClick={() => setCount(count + 1)}>Click - {count}</button>
    </div> );
}