import React from 'react';
import { Navbar } from '../components';
import items from '../fixtures/data';
import logo from '../logo.svg';


export function Header() {
  return (
    <main>
      <Navbar>
        <Navbar.Link>
          <Navbar.Logo src = { logo } />
        </Navbar.Link>
        <Navbar.NavLink>
          {
            items.map((item) => (

              <Navbar.Items key = { item.id } >
                <a href = '#'>{ item.title }</a>
              </Navbar.Items>

            ))
          }
        </Navbar.NavLink>
      </Navbar>
    </main>
  )
}

