import React from 'react';
import './App.css';
import CounterOne from './Components/UseReducer/counterOne';


// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'Shubham'}> */}
        {/* <ChannelContext.Provider value={'byShubhamGupta'}> */}
          <CounterOne />
        {/* </ChannelContext.Provider> */}
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
