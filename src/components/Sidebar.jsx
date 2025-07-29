import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../context/sidebarContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  const { collapsed, toggleSidebar } = useSidebar();

  const getNavLinkClass = ({ isActive }) =>
    `nav-link text-white ${isActive ? 'bg-primary fw-bold' : ''}`;

  return (
    <div
        className="bg-dark text-white p-3"
        style={{
        width: collapsed ? '75px' : '200px',
        transition: 'width 0.5s ease',
        minHeight: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 1030,
      }}
    >
      <button
        className="btn btn-outline-light btn-lg mb-3"
        onClick={toggleSidebar}
      >
        <i
          className={`bi ${collapsed ? 'bi-list' : 'bi-list'}`}
        ></i>
      </button>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <NavLink to="/" className={getNavLinkClass}>
            <i className="bi bi-house me-2"></i>
            {!collapsed && 'Home'}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/cart" className={getNavLinkClass}>
            <i className="bi bi-cart me-2"></i>
            {!collapsed && 'Cart'}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
