import React, { useContext, useState } from 'react';
import { Search } from '../components';
import { Card } from '../components';
import { FeatureContext } from '../context/feature';
import { Loading } from '../components';


export function BodyContainer() {

	const { cocktails, loading, setSearchVal } = useContext(FeatureContext);
  const searchValue = React.useRef('')

  React.useEffect(() => {
  	if(searchValue.current) {
  		searchValue.current.focus();
  	}
  }, []);
  
  function searchCocktail() {
    setSearchVal(searchValue.current.value)
  }
	function handleSubmit(e) {
    e.preventDefault()
  }

	if (loading) {
		return <Loading />
	}

	return(
		<>
			<Search>
				<Search.Form onSubmit = { handleSubmit }>
					<Search.Control>
						<Search.InputLabel>Search your favorite cocktail</Search.InputLabel>
						<Search.InputField autoFocus type='text' name='name' id='name' ref = { searchValue } onChange = { searchCocktail } /> 
					</Search.Control>
				</Search.Form>
			</Search>

			<Card>
				<Card.Title>cocktails</Card.Title>
				<Card.Center>
					{
						cocktails.map((item) => (
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