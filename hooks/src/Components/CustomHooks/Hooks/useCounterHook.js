import { useState } from 'react';

export function useCounter(initialValue,offset) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + offset)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - offset)
    }

    const reset = () => {
        setCount(0)
    }


    return [count, increment, decrement, reset]

}