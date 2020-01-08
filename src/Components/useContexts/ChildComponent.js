import React, { useContext } from 'react';
import { UserContext, ThemeContext } from './ParentComponent';

const ChildComponent = () => {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return ( <div style={{backgroundColor: theme}}>
        {user}
    </div> );
}
 
export default ChildComponent;