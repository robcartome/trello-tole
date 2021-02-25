import logo from './logo.svg';
import Home from "./pages/Home";
import Main from "./pages/Main";
import './App.css';
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("home");

  let currentSection = null;
  switch (route) {
    case "home":
      currentSection = <Home goto = {setRoute} />;
      break;
    case "main":
      currentSection = <Main setRoute = {setRoute} />;
      break;
  }
  return (
    <div className="App">
      { currentSection }
    </div>
  );
}

export default App;
