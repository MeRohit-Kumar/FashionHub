// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useSidebar } from '../context/sidebarContext';

const Layout = ({ children }) => {
  const { collapsed } = useSidebar();

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <main
          className="flex-grow-1 p-4"
          style={{ marginLeft: collapsed ? '60px' : '200px', transition: 'margin-left 0.3s ease' }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
