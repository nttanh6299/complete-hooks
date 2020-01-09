import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    const dispatchAction = (action) => () => {
        dispatch(action);
    }

    return ( <div>
        <p>Count: {count}</p>
        <button onClick={dispatchAction({ type: 'increment' })}>+ 1</button>
        <button onClick={dispatchAction({ type: 'decrement' })}>- 1</button>
        <button onClick={dispatchAction({ type: 'reset' })}>Reset</button>
    </div> );
}