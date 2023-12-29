import React, {useEffect} from 'react';
import './App.css';
import GamePage from "./GamePage";
import  eruda from "eruda";


function App() {

    useEffect(() => {
      eruda.init();
    }, []);
  return (
    <div className="App">
      <GamePage />
    </div>
  );
}

export default App;
