import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => (
  <>
    <main>
      <h1>Math magicians</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="calculator">
              calculator
            </Link>
          </li>
          <li>
            <Link className="link" to="quotes">
              quote
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  </>
);

export default NavBar;
