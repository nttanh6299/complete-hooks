import React, { useState } from 'react';

//merge state
//return {...prevState, initialState}
//prevState is used when the new value depends on the current value, such as calculating a new value base on the current value.

export const PrevStateHookCounter = () => {
    const [count, setCount] = useState(0);

    const incrementFive = async () => {
        for(let i = 0; i < 5; i++) {
            //not working because the setCount method run asynchronously            
            //setCount(count + 1);

            //it works
            //setCount(prevCount => prevCount + 1);
        }
    }

    return ( <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
        <button onClick={incrementFive}>+ 5</button>
    </div> );
}