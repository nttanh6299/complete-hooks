import React, { useState, useRef, useEffect } from 'react';

export const HookTimer = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    return ( <div>
        {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
    </div> );
}