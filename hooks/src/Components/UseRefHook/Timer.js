import React, { useEffect, useRef, useState } from 'react';


function Timer() {


    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    function tick() {
        setTimer(timer => timer + 1)
    }

    // interval is stricted to this useEfect Only.
    // useRef can be used to store immutable values and value persists  through the renders without causing extra renders
    useEffect(() => {
         intervalRef.current = setInterval(tick, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }

    }, [])


    return (
        <div>
            Timer = {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default Timer