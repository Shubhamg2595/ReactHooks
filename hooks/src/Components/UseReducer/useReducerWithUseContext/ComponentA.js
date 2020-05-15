import React, { useContext } from 'react';
import { CounterContext } from '../../../App'

function ComponentA() {

    const counterContext = useContext(CounterContext)

    return (
        <div>
            Component A
            <div className="btn">
                <button onClick={() => counterContext.dispatchCounterAction('reset')}>Reset Counter</button>
                <button onClick={() => counterContext.dispatchCounterAction('inc')}>Inc Counter</button>
                <button onClick={() => counterContext.dispatchCounterAction('dec')}>Dec Counter </button>
            </div>
        </div>
    )
}

export default ComponentA