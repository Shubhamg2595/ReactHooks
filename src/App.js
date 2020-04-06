import React from "react";
import Home from "./Home";
import Speakers from "./Speakers";

export const configContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Speakers") return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
  signMeUp: false,
  showSpeakerSpeakingDays: false,
}

const App = ({ pageName }) => {
  return (
    <>
      <configContext.Provider value={configValue}>
        <div>{pageToShow(pageName)}</div>
      </configContext.Provider>
    </>
  )
};

export default App;
