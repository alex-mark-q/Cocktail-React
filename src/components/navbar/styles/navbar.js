import styled from 'styled-components/macro';

export const Container = styled.nav`
  background: var(--mainWhite);
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid var(--primaryColor);
  box-shadow: var(--lightShadow);
`;
export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--fullWidth);
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--mainBlack);
`;

export const NavLink = styled.ul`
  display: flex;
  align-items: center;

  a {
    text-transform: capitalize;
    display: inline-block;
    font-weight: bold;
    margin-right: 0.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    transition: var(--mainTransition);
  }
`;

export const Items = styled.li``;

