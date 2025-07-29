import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/productDetail';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useSidebar } from './context/sidebarContext';
import Login from'./pages/Login';
import Signup from'./pages/Signup';

const App = () => {
  const { collapsed } = useSidebar();

  return (
    <Router>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <main
          className="flex-grow-1 p-4"
          style={{ marginLeft: collapsed ? '60px' : '200px', transition: 'margin-left 0.3s ease' }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
