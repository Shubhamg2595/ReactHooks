import React, { useState, useMemo } from 'react';


function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        // above code is done to intentionally delay execution of this fn.
        return counterOne % 2 === 0
    }, [counterOne])

    const isEven = counterOne;


    // Q. on clicking button for countTwo, there is still delay in rendering. why?
    // ? bcoz on every CLick, the entire component renders again, that means isEven() funcion is executed again too, which causes the delay.

    // ?useMemo : this hook will only recompute the cached values when one of the dependency has changed. Similar to working of useCallBack

    return (
        <div>
            <div>
                <button onClick={incrementOne}>CountOne value - {counterOne} </button>
                <span> {isEven ? ' Even ' : ' Odd '} </span>
            </div>
            <div>
                <button onClick={incrementTwo}>CountTwo value - {counterTwo} </button>
            </div>

        </div>
    )


}


export default Counter;