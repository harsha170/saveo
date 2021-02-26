import React,{useEffect} from 'react'
import Maps from "./components/Maps";
import Header from "./components/Header"
import Coordinates from "./components/Coordinates"

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Maps />
      <Coordinates />
    </div>
  );
}

export default App;
