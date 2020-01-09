import React, { useContext } from 'react';
import { CountContext } from './ParentComponent';

const ChildThree = () => {
    const { dispatchAction } = useContext(CountContext);

    return ( <button onClick={dispatchAction({type: 'reset'})}>Child three: Reset</button> );
}
 
export default ChildThree;