import React from 'react';
import './App.css';
import ComponentC from './Components/ContextExample/ComponentC';


export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Shubham'}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  );
}

export default App;
