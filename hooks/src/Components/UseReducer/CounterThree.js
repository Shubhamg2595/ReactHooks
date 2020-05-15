import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {

    switch (action) {
        case 'inc':
            return state + 1;
        case 'dec':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterThree() {

    // using multiple reducers, to make use of same piece of code . When dealing with multiple state Variables having same state transitions, its better to use same reducers for different state variables

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)


    return (
        <>
            <div className="btn">
                <button onClick={() => dispatch('reset')}>Reset Counter</button>
                <button onClick={() => dispatch('inc')}>Inc Counter</button>
                <button onClick={() => dispatch('dec')}>Dec Counter </button>
                <p>{`value of counter::  ${count}`}</p>
                <button onClick={() => dispatch2('reset')}>Reset Counter</button>
                <button onClick={() => dispatch2('inc')}>Inc Counter</button>
                <button onClick={() => dispatch2('dec')}>Dec Counter </button>
                <p>{`value of counter::  ${count2}`}</p>
            </div>
        </>
    )

}


export default CounterThree;