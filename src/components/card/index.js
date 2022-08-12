import React, { useState, useContext, createContext } from 'react';
import { Container, Title, Center, Cocktail, ContainerImage, Image, Footer, Text, SubTitle, Description } from './styles/card';


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

Card.Text = function CardText({ children, ...restProps }) {
	return <Text { ...restProps }>{ children }</Text>
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
	return <SubTitle { ...restProps }>{ children }</SubTitle>
};
Card.Description = function CardDescription({ children, ...restProps }) {
	return <Description { ...restProps }>{ children }</Description>
};


export default Card;