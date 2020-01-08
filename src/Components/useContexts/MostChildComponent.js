import React, { useContext } from 'react';
import { UserContext, ThemeContext } from './ParentComponent';

//the component display only user
const MostChildComponent = () => {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return ( <div style={{backgroundColor: theme}}>
        {user}
    </div> );
}
 
export default MostChildComponent;