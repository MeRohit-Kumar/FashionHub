import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);


  return (
    <nav className="navbar fixed-top navbar-dark bg-dark px-4 shadow">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand fs-4 fw-bold text-info" to="/" style={{ marginLeft: '170px' }}>
          Fashion Hub
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
          <NavLink to="/" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`}>
              <i className="bi bi-house-door me-1"></i> Home
            </NavLink>

          <NavLink to="/cart" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`}>
              <i className="bi bi-cart"></i> Cart
            </NavLink>

          <NavLink to="/login" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`}>
              <i className="bi bi-box-arrow-in-right me-1"></i> Login
            </NavLink>

          <NavLink to="/signup" className={({ isActive }) => `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`}>
              <i className="bi bi-box-arrow-in-left me-1"></i> Signup
            </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
