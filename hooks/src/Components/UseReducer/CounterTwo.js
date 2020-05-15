import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {

    switch (action.type) {
        case 'inc':
            return { firstCounter: state.firstCounter + action.value };
        case 'dec':
            return { firstCounter: state.firstCounter - action.value };
          case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <>
            <div className="btn">
                <button onClick={() => dispatch({ type: 'reset' })}>Reset Counter</button>
                <button onClick={() => dispatch({ type: 'inc', value: 1 })}>Inc Counter</button>
                <button onClick={() => dispatch({ type: 'inc', value: 5 })}>Inc Counter By 5</button>
                <button onClick={() => dispatch({ type: 'dec', value: 1 })}>Dec Counter </button>
                <p>{`value of firstCounter::  ${count.firstCounter}`}</p>
            </div>
        </>
    )

}


export default CounterTwo;