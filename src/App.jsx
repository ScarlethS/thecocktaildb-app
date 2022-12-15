import "./App.css";
import React, { useState, useEffect } from "react";
import DrinksCards from "./components/DrinksCards";

const App = () => {
  const [alcoholCocktail, setAlcoholCocktail] = useState(true);
  const [cocktailDrinksAlcoholic, setCocktailDrinksAlcoholic] = useState([]);
  const [cocktailDrinksNonAlcoholic, setCocktailDrinksNonAlcoholic] = useState(
    []
  );

  const [searchCocktail, setSearchCocktail] = useState("");

  // const searchBox = (e) => {
  //   setSearchCocktail(e.target.value);
  //   console.log(e.target.value);
  // };

  // const searchResult = !searchBox
  //   ? popularCocktail
  //   : popularCocktail.filter((dataDrink) =>
  //       dataDrink.strDrink
  //         .toLowerCase()
  //         .includes(searchCocktail.toLocaleLowerCase())
  //     );

  useEffect(() => {
    const getDrinks = async () => {
      const alcoholicDrinksFetched = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`,
        {
          method: "GET",
        }
      );
      const nonAlcoholicDrinksFetched = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`,
        {
          method: "GET",
        }
      );

      const resultsAlcoholic = await alcoholicDrinksFetched.json();
      setCocktailDrinksAlcoholic(resultsAlcoholic.drinks);
      const resultsNonAlcoholic = await nonAlcoholicDrinksFetched.json();
      setCocktailDrinksNonAlcoholic(resultsNonAlcoholic.drinks);
    };
    getDrinks();

    return () => {
      console.log("BYE!");
    };
  }, []);

  return (
    <div className="App">
      <div className="Main-container">
        <h1>Welcome to The Cocktails</h1>

        <input
          type="text"
          placeholder="Search by Cocktail Name"
          className="search-box-input"
          value={searchCocktail}
          onChange={(event) => setSearchCocktail(event.target.value)}
        />
        {/* <Search /> */}

        <div className="changeCocktails">
          <button
            className="buttonChange"
            onClick={() => setAlcoholCocktail(!alcoholCocktail)}
          >
            {alcoholCocktail ? "No Alcoholic" : "Alcoholic"}
          </button>
          {alcoholCocktail ? (
            <DrinksCards drinksProps={cocktailDrinksAlcoholic} />
          ) : (
            <DrinksCards drinksProps={cocktailDrinksNonAlcoholic} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
