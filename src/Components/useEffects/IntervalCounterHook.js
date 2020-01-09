import React, { useState, useEffect } from 'react';

/*
React only runs the effects after letting the browser paint.
1.React renders UI for {id: 20}.
2.The browser paints. We see the UI for {id: 20} on the screen.
3.React cleans up the effect for {id: 10}.
4.React runs the effect for {id: 20}.
*/

export const IntervalCounterHook = () => {
    //going first after setting the count
    const [count, setCount] = useState(0);

    console.log("begin");

    /*  
    khi count = 0, tick sẽ chạy (ngữ cảnh hiện tại của tick là count = 0), tăng count
    ở useEffect ko có dependencies nào => ignore useEffect (=> ko thể chuyển tick đến ngữ cảnh khác count != 0)
    render (count + 1) = (0 + 1), sẽ mãi là 1
    */
    const tick = () => {
        console.log('set count');
        setCount(count + 1)
        console.log(count)
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
    }, [count]);

    console.log("Render");
    return ( <div>
        {count}
    </div> );
}