import React, { useState, useEffect } from "react";
import "./PopularDrinks.css";

const PopularDrinks = () => {
  const [popularDrink, setPopularDrink] = useState([]);

  useEffect(() => {
    const getPopularDrinks = async () => {
      const popularDrinksFetched = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`,
        {
          method: "GET",
        }
      );
      const result = await popularDrinksFetched.json();
      setPopularDrink(Object.values(result.drinks).slice(0, 8));
    };
    console.log("Hicimos la peticion HTTP");
    console.log(popularDrink);
    getPopularDrinks();

    return () => {
      console.log("BYE!");
    };
  }, []);

  return (
    <div className="popular-box">
      {popularDrink.map((item) => {
        return (
          <div className="alcoholic-drinks">
            <div className="imagedrink">
              <img src={item.strDrinkThumb} />
            </div>
            <div className="info-drink-alcoholic">
              <h2>{item.strDrink}</h2>
            </div>
          </div>
        );
      })}

      {/* {popularDrink.map((it) =>(
        <ul key={it.drinks[]}>
            <li>{}</li>
        </ul>
      ))} */}
    </div>
  );
};

export default PopularDrinks;
