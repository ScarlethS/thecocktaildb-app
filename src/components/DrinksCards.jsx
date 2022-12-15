import React, { useState, useEffect } from "react";
import "./CocktailDrinksStyle.css";

const DrinksCards = ({ drinksProps = [] }) => {
  return (
    <>
      <div className="popular-box">
        {drinksProps.length > 0 ? (
          drinksProps.map((nanDrinks) => {
            return (
              <div className="alcoholic-drinks" key={nanDrinks.idDrink}>
                <div className="imageDrink">
                  <img src={nanDrinks.strDrinkThumb} />
                </div>
                <div className="info-drink-alcoholic">
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
