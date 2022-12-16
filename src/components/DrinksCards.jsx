import React, { useState } from "react";
import "./DrinksCardsStyle.css";

const DrinksCards = ({ drinksProps = [] }) => {
  const [searchCocktail, setSearchCocktail] = useState("");

  const result = !searchCocktail
    ? drinksProps
    : drinksProps.filter((dataDrink) =>
        dataDrink.strDrink
          .toLowerCase()
          .includes(searchCocktail.toLocaleLowerCase())
      );

  return (
    <>
      <input
        type="text"
        placeholder="Search by Cocktail Name"
        className="search-box-input"
        value={searchCocktail}
        onChange={(event) => setSearchCocktail(event.target.value)}
      />
      <div className="container-cards">
        {result.length > 0 ? (
          result.map((nanDrinks) => {
            return (
              <div className="cards-drinks" key={nanDrinks.idDrink}>
                <div className="imageDrink">
                  <img src={nanDrinks.strDrinkThumb} />
                </div>
                <div className="info-drinks">
                  <h2>{nanDrinks.strDrink}</h2>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No drinks</h1>
        )}
      </div>
    </>
  );
};

export default DrinksCards;
