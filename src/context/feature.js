import React, { createContext, useState, useEffect } from 'react';

export const FeatureContext = createContext();

// здесь должен быть провайдер Provider и запросы
export function FeatureProvider({ children }) {
	const [cocktails, setCocktails] = useState([]);

	const fetchDrinks = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setCocktails(data);
    } catch(error) {
      console.error(error);
    }
  }
	useEffect(() => {
		fetchDrinks();
	}, []);

	return(

		<FeatureContext.Provider value = {{ cocktails }}>
			{children}
		</FeatureContext.Provider>
	)

}
