import React, { useState, useEffect } from 'react';

//normally, the useEffect method re-run after the component re-render

export const MouseHookContainer = () => {
    const [display, setDisplay] = useState(true);

    return (<div>
        <button onClick={() => setDisplay(!display)}>{display ? 'Hide' : 'Show'}</button>
        {display && <MouseHook />}
    </div>);
}

const MouseHook = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounted');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return ( <div>
        X: {x} - Y: {y}
    </div> );
}