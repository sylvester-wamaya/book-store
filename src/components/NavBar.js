import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="categories">Categories</NavLink>
    </div>
  );
}

export default NavBar;
