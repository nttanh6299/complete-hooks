import React, { useState } from 'react';

//prevState, returns the new state based on the previous state
//React makes sure the latest state value is supplied as an argument to the update state function
//merge state
//return {...prevState, initialState}

//prevState is used when the new value depends on the current value, such as calculating a new value base on the current value.

/*
The initial value will be assigned only on the initial render 
(if it’s a function, it will be executed only on the initial render).
in subsequent renders, the argument of the useState hook will be ignored and the current value will be retrieved
*/

/*
this update function doesn’t update the value right away. 
Rather, it enqueues the update operation (callback is not). Then, after re-rendering the component,
the argument of useState will be ignored and this function will return the most recent value.
*/

/*
if you use the same value as the current state to update the state (React uses Object.is for comparing),
React won’t trigger a re-render. 
instead, create a new object and set it
*/

/*
the state update function is called with a delay of one second. That works for a single click.
However, try to click one of the buttons multiple times in a row.
The state update function will always operate on the same state (here: count) within this one second
*/

// => Always use a function in useState's update function if your state update depends on your previous state.

export const PrevStateHookCounter = () => {
    const [count, setCount] = useState(0);

    const incrementFive = async () => {
        for(let i = 0; i < 5; i++) {
            //it is not works         
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