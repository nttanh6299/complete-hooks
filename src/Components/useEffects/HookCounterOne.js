import React, { useState, useEffect } from 'react';

export const HookCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //conditionally run effect
    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `You click ${count} times`;
    }, [count]);

    return ( <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div> );
}