import "./App.css";
import React, { useState, useEffect } from "react";
import DrinksCards from "./components/DrinksCards";
import { getDrinks } from "./API";

const App = () => {
  const [alcoholCocktail, setAlcoholCocktail] = useState(true);
  const [alcoholicDrinks, setAlcoholicDrinks] = useState([]);
  const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([]);

  const getData = async () => {
    try {
      const data = await getDrinks();
      setAlcoholicDrinks(data.alcoholicDrinks);
      setNonAlcoholicDrinks(data.nonAlcoholicDrinks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="Main-container">
        <h1>Welcome to The Cocktails</h1>

        <div className="changeCocktails">
          <div className="container-button">
            <button
              className="buttonChange"
              onClick={() => setAlcoholCocktail(!alcoholCocktail)}
            >
              {alcoholCocktail ? "No Alcoholic Drinks" : "Alcoholic Drinks"}
            </button>
          </div>

          {alcoholCocktail ? (
            <DrinksCards drinksProps={alcoholicDrinks} />
          ) : (
            <DrinksCards drinksProps={nonAlcoholicDrinks} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
