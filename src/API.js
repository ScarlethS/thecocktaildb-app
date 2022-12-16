
export const getDrinks = async () => {
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
    // setCocktailDrinksAlcoholic(resultsAlcoholic.drinks);  
    
    const resultsNonAlcoholic = await nonAlcoholicDrinksFetched.json();
    // setCocktailDrinksNonAlcoholic(resultsNonAlcoholic.drinks);  

    return{
        alcoholicDrinks: resultsAlcoholic.drinks,
        nonAlcoholicDrinks: resultsNonAlcoholic.drinks
     }
    
  };
 