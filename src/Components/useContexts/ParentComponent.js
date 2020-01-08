import React from 'react';
import ChildComponent from './ChildComponent';
import MostChildComponent from './MostChildComponent';

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

export const ParentComponent = () => {
    return ( <div>
        <UserContext.Provider value={'john cena'}>
            <ThemeContext.Provider value={'#ccc'}>
                <ChildComponent />
            </ThemeContext.Provider>
            <MostChildComponent />
        </UserContext.Provider>
    </div> );
}