import React, { useState } from "react";
import "./CocktailDrinksStyle.css";

const CocktailDrinks = ({ value }) => {
  return (
    <>
      <div>{console.log(value)}</div>
      <div className="popular-box">
        {value.map((drinks) => {
          return (
            <div className="alcoholic-drinks" key={drinks.idDrink}>
              <div className="imageDrink">
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

export default CocktailDrinks;
