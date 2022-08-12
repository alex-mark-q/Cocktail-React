import React, { createContext, useState, useEffect, useCallback } from 'react';

export const FeatureContext = createContext();

export function FeatureProvider({ children }) {

	const [loading, setLoading] = useState(false);
	const [cocktails, setCocktails] = useState([]);
  const [searchVal, setSearchVal] = useState('');


	const fetchDrinks = useCallback( async () => {
    setLoading(true);
    try {

      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktails);
      } else {
        setCocktails([])
      }
      setLoading(false);
    } catch(error) {
      console.error(error);
      setLoading(false);
    }
  },[searchVal]);

	useEffect(() => {
		fetchDrinks();
	}, [searchVal]);

	return(

		<FeatureContext.Provider value = {{ cocktails, loading, searchVal, setSearchVal }}>
			{children}
		</FeatureContext.Provider>
	)

}
