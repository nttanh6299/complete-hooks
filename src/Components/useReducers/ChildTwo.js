import React, { useContext } from 'react';
import { CountContext } from './ParentComponent';

const ChildTwo = () => {
    const { dispatchAction } = useContext(CountContext);

    return ( <button onClick={dispatchAction({type: 'decrement'})}>Child two: Decrement</button> );
}
 
export default ChildTwo;