import React, { useContext } from 'react';
import { CountContext } from './ParentComponent';

const ChildOne = () => {
    const { dispatchAction } = useContext(CountContext);

    return ( <button onClick={dispatchAction({type: 'increment'})}>Child one: Increment</button> );
}
 
export default ChildOne;