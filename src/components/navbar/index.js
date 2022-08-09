import React from 'react';

import { Container, Center, Logo, NavLink, Items, Link } from './styles/navbar';

function Navbar({ children, ...restProps }) {
	return(

    <Container { ...restProps }>
      <Center { ...restProps }>
        { children }
      </Center>
    </Container>

	)
}

Navbar.Logo = function NavbarLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Navbar.NavLink = function NavbarNav({ children, ...restProps }) {
  return <NavLink {...restProps}>{ children }</NavLink>;
};

Navbar.Items = function NavbarItems({ children, ...restProps }) {
  return <Items { ...restProps }>{ children }</Items>;
};

Navbar.Link = function NavbarLink({ children, ...restProps }) {
  return <Link { ...restProps }>{ children }</Link>;
};

export default Navbar;