// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PopularDrinks from "./components/PopularDrinks";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="Main-container">
        <h1>Welcome to The Cocktails</h1>
        <div className="search-by">
          <PopularDrinks />
        </div>
      </div>
    </div>
  );
}

export default App;
