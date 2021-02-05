import React from "react";
import Home from './componant/pages/Home';
import GeneralTest from './componant/Atoms/GeneralTest';
 
/*
let dimBoard = {w : 10, h : 20};
let board = Array(dimBoard.h).fill().map(()=> Array(dimBoard.w))
*/
function App() {
  return (
    <div className="App">
        <GeneralTest />
        <Home />
    </div>
  );
}

export default App;
