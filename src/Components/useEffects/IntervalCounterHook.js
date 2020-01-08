import React, { useState, useEffect } from 'react';

export const IntervalCounterHook = () => {
    const [count, setCount] = useState(0);

    console.log("begin");

    const tick = () => {
        setCount(prev => prev + 1);
    }

    const doSomething = () => {
        console.log("do something after set interval");
    }

    useEffect(() => {
        console.log("Component did mount");
        const interval = setInterval(tick, 1000);
        doSomething();
        return () => {
            console.log("Component unmounted");
            clearInterval(interval);
        }
    }, []);

    console.log("Render");
    return ( <div>
        {count}
    </div> );
}