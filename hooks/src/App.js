import React from 'react';
import './App.css';
import ComponentC from './Components/ContextExample/ComponentC';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Shubham'}>
        <ChannelContext.Provider value={'byShubhamGupta'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
