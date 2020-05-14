import React, { useState, useEffect } from 'react';



function HookInterval() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        function tick() {
            setCount(count + 1);
        }
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [count])


    return (
        <>
            <div>
                <h5>Timer : </h5> {count}
            </div>
        </>
    )

}


export default HookInterval;