import React, { useReducer } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';

export const CountContext = React.createContext();

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

export const ParentComponent = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    const dispatchAction = (action) => () => {
        dispatch(action);
    }

    return ( <div>
        Count: {count}
        <CountContext.Provider value={{dispatchAction}}>
            <ChildOne />
            <ChildTwo />
            <ChildThree />
        </CountContext.Provider>
    </div> );
}