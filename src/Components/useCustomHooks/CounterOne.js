import React from 'react';
import useCounter from '../Hooks/useCounter';

export const CounterOne = () => {
    const [count, increment, decrement, reset] = useCounter(0);

    return ( <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div> );
}