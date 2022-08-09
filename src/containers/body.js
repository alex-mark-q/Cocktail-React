import React from 'react';
import { Search } from '../components';
import { Card } from '../components';

export function BodyContainer({  }) {
	return(
		<>
			<Search>
				<Search.InputLabel>search your favorite cocktail</Search.InputLabel>
				<Search.InputField type='text' name='name' id='name' /> 
			</Search>

			<Card>
				<Card.Title>cocktails</Card.Title>
				<Card.Center>
					<Card.Cocktail>
						<Card.ContainerImage>
							<Card.Image src = { 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg' } />
						</Card.ContainerImage>
						<Card.Footer>
							<h3>A1</h3>
							<h4>Cocktail glass</h4>
							<p>Alcoholic</p>
						</Card.Footer>
					</Card.Cocktail>
				</Card.Center>
			</Card>
		</>
	)
}

export default BodyContainer;