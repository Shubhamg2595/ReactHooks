import React, { useReducer } from 'react';
import './App.css';
import ComponentA from './Components/UseReducer/useReducerWithUseContext/ComponentA';
import ComponentB from './Components/UseReducer/useReducerWithUseContext/ComponentB';
import ComponentC from './Components/UseReducer/useReducerWithUseContext/ComponentC';


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

export const CounterContext = React.createContext();


function App() {

  const [count, dispatch] = useReducer(reducer, initialState)



  return (
    <div className="App">

      <CounterContext.Provider value={
        {
          counterValue: count,
          dispatchCounterAction: dispatch
        }
      }>
        <p>{`value of counter::  ${count}`}</p>

        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
