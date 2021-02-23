import React from "react";
import ReactDOM from "react-dom";
import Konva from "./Konva";


function App() {
  return (
    <div className="App">
      <Konva></Konva>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
