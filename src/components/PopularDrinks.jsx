import React, { useState, useEffect } from "react";
import "./PopularDrinks.css";

const PopularDrinks = () => {
  const [popularCocktail, setPopularDrink] = useState([]);
  const [searchCocktail, setSearchCocktail] = useState("");

  const searchBox = (e) => {
    setSearchCocktail(e.target.value);
    console.log(e.target.value);
  };

  const searchResult = !searchBox
    ? popularCocktail
    : popularCocktail.filter((dataDrink) =>
        dataDrink.strDrink
          .toLowerCase()
          .includes(searchCocktail.toLocaleLowerCase())
      );

  useEffect(() => {
    const getPopularDrinks = async () => {
      const popularDrinksFetched = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`,
        {
          method: "GET",
        }
      );
      const result = await popularDrinksFetched.json();
      setPopularDrink(Object.values(result.drinks).slice(0, 20));
    };
    console.log("Hicimos la peticion HTTP");
    getPopularDrinks();

    return () => {
      console.log("BYE!");
    };
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Search by Cocktail Name"
        className="search-box-input"
        value={searchCocktail}
        onChange={searchBox}
      ></input>
      <div className="popular-box">
        {searchResult.map((drinks) => {
          return (
            <div className="alcoholic-drinks" key={drinks.idDrink}>
              <div className="imagedrink">
                <img src={drinks.strDrinkThumb} />
              </div>
              <div className="info-drink-alcoholic">
                <h2>{drinks.strDrink}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularDrinks;
