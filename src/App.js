import { useState } from "react";
import Home from "./pages/Home";
import Main from "./pages/Main";
import './App.css';

function App() {
  const [route, setRoute] = useState("home");

  let currentSection = null;
  switch (route) {
    case "home":
      currentSection = <Home goto = {setRoute} />;
      break;
    case "main":
      currentSection = <Main goto = {setRoute} />;
      break;
  }
  return (
    <div className="App">
      { currentSection }
    </div>
  );
}

export default App;
