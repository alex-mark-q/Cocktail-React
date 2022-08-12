import styled from 'styled-components/macro';

export const Container = styled.section`
  padding: 5rem 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  text-align: center;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
`;

export const Center = styled.section`
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
  display: grid;
  grid-row-gap: 2rem;
  row-gap: 2rem;
  grid-column-gap: 2rem;
  column-gap: 2rem;
  align-items: start;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
  }
`;

export const Cocktail = styled.article`
  background: var(--mainWhite);
  margin-bottom: 2rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--mainBorderRadius);
`;

export const ContainerImage = styled.div`
`;

export const Image = styled.img`
  height: 20rem;
  object-fit: cover;
  border-top-left-radius: var(--mainBorderRadius);
  border-top-right-radius: var(--mainBorderRadius);
`;

export const Footer = styled.div`
  padding: 1.5rem;
`;

export const Text = styled.p`
  color: var(--darkGrey);
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.h3`
  font-family: var(--slantedFont);
  margin-bottom: 0.3rem;
  letter-spacing: var(--mainSpacing);
  font-size: 2rem;
`;

export const Description = styled.h4`
  margin-bottom: 0.3rem;
  font-family: var(--slantedFont);
  letter-spacing: var(--mainSpacing);
`;