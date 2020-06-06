import React, { useState } from 'react';
import './App.css';
import Normal from './components/NormalCalc';
import Scientific from "./components/SceintificCalc";

function App() {
  const [mode, setMode] = useState("normal")
  const [ theme, setTheme ] = useState("theme-light")

  const returnCalc = () => {
    switch (mode) {
      case "normal":
        return <Normal />
      case "scientific":
        return <Scientific />
      default:
        return <Normal />
    }
  }

  const _setTheme = (value) => {
    setTheme(value)
  }

  const _setMode = (value) => {
    setMode(value)
  }
  

  return (
    <div className={theme}>
      <div style={{placeSelf: 'center'}}>
        <div className="theme-box">
          <div onClick={() => _setTheme("theme-light")} value={theme === "theme-light"} className="padding-10">Light Mode</div>
          <div onClick={() => setTheme("theme-dark")} value={theme === "theme-dark"} className="padding-10">Dark Mode</div>
        </div>
        <br/>
        <div className="theme-box">
          <div onClick={() => setMode("normal")} value={mode === "normal"} className="padding-10">Normal Calculator</div>
          <div onClick={() => setMode("scientific")} value={mode !== "normal"} className="padding-10">Scientific Calculator</div>
        </div>
      </div>
      {returnCalc()}
    </div>
  );
}

export default App;
