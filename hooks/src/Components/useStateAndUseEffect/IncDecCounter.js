import React, { useState } from 'react';



function IncDecCounter() {

    const initalCount = 0;
    const [count, setCount] = useState(initalCount);


    // useState with previous stateValue
    function incrementFive() {
        // setCount(count + 5)
        setCount(prevCount => prevCount + 5)
    }

    return (
        <>
            <div className="btn">
                <button onClick={() => setCount(initalCount)}>Reset Counter</button>
                <button onClick={() => setCount(count + 1)}>Inc Counter</button>
                <button onClick={() => setCount(count - 1)}>Dec Counter </button>
                <button onClick={incrementFive}>Inc Counter By 5 </button>
                <p>{`value of counter::  ${count}`}</p>
            </div>
        </>
    )

}


export default IncDecCounter;