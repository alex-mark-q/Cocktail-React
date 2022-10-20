import React, { useContext, useState, useEffect } from 'react';
import { Search } from '../components';
import { Card } from '../components';
import { FeatureContext } from '../context/feature';
import { Loading } from '../components';


export function BodyContainer() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
	const { cocktails, loading } = useContext(FeatureContext);

  // useEffect(() => {
		// const results = cocktails.filter(cocktail =>
		//   cocktail.name.toLowerCase().includes(searchTerm)
		// );
		// setSearchResults(results);
  // }, [searchTerm]);


  function handleSubmit(e) {
    e.preventDefault()
  }

	if (loading) {
		return <Loading />
	}
  
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

	return(
		<>
			<Search>
				<Search.Form onSubmit = {handleSubmit}>
					<Search.Control>
						<Search.InputLabel>Search your favorite cocktail</Search.InputLabel>
						<Search.InputField searchTerm = {searchTerm} handleChange = {handleChange} /> 
					</Search.Control>
				</Search.Form>
			</Search>
			<Card>
				<Card.Title>cocktails</Card.Title>
				<Card.Center>
					{
						cocktails.filter(cocktail => {
					    if (searchTerm === '') {
					      return cocktail;
					    } else if (cocktail.name.toLowerCase().includes(searchTerm)) {
					      return cocktail;
					    }
					  }).map((item) => (
							<Card.Cocktail key = { item.id }>
								<Card.ContainerImage>
									<Card.Image src = { item.image } alt = { item.name } />
								</Card.ContainerImage>
								<Card.Footer>
									<Card.SubTitle>{ item.name }</Card.SubTitle>
									<Card.Description>{ item.glass }</Card.Description>
									<Card.Text>{ item.info }</Card.Text>
								</Card.Footer>
							</Card.Cocktail>
						))
					}
				</Card.Center>
			</Card>
		</>
	)
}

export default BodyContainer;