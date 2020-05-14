import React, { useState, useEffect } from 'react';



function UseEffectWithCounter1() {

    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Clicked the buttom ${count} times`
    },[count])


    return(
        <>
        <div>
        <button onClick={() => setCount(count+1)}>{`count ${count}`}</button>
        </div>
        </>
    )

}


export default UseEffectWithCounter1;