import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Center, Cocktail, ContainerImage, Image, Footer } from './styles/card';


function Card({ children, ...restProps }) {

	return (
		
		<Container { ...restProps }>
			{ children }
		</Container>

	)
}

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title { ...restProps }>{ children }</Title>
};

Card.Center = function CardCenter({ children, ...restProps }) {
	return <Center { ...restProps }>{ children }</Center>
};

Card.Cocktail = function CardCocktail({ children, ...restProps }) {
	return <Cocktail { ...restProps }>{ children }</Cocktail>
};

Card.ContainerImage = function CardContainerImage({ children, ...restProps }) {
	return <ContainerImage { ...restProps }>{ children }</ContainerImage>
};

Card.Image = function CardImage({ ...restProps }) {
	return <Image { ...restProps } />
};

Card.Footer = function CardCenter({ children, ...restProps }) {
	return <Footer { ...restProps }>{ children }</Footer>
};

export default Card;