import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status 
  useEffect(() => {
    const status = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(status);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark px-4 shadow">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink
          className="navbar-brand fs-4 fw-bold text-info"
          to="/"
          style={{ marginLeft: '170px' }}
        >
          Fashion Hub
        </NavLink>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`
            }
          >
            <i className="bi bi-house-door me-1"></i> Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`
            }
          >
            <i className="bi bi-cart"></i> Cart ({cartItems.length})
          </NavLink>

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`
                }
              >
                <i className="bi bi-box-arrow-in-right me-1"></i> Login
              </NavLink>

              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `btn btn-sm ${isActive ? 'btn-primary text-light' : 'btn-outline-light'}`
                }
              >
                <i className="bi bi-box-arrow-in-left me-1"></i> Signup
              </NavLink>
            </>
          ) : (
            <div className="dropdown">
              <button
                className="btn btn-outline-light btn-sm dropdown-toggle"
                type="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-1"></i> Profile
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => navigate('/settings')}>
                    <i className="bi bi-gear me-2"></i> Settings
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right me-2"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
