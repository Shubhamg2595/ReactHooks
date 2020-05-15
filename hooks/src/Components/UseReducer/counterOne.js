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

function CounterOne() {

    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <>
            <div className="btn">
                <button onClick={() => dispatch('reset')}>Reset Counter</button>
                <button onClick={() => dispatch('inc')}>Inc Counter</button>
                <button onClick={() => dispatch('dec')}>Dec Counter </button>
                <p>{`value of counter::  ${count}`}</p>
            </div>
        </>
    )

}


export default CounterOne;