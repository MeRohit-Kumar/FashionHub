// Step 1: Create a context to manage sidebar collapsed state
// src/context/SidebarContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(prev => !prev);

  return (
    <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
