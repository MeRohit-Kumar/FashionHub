import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import { addToCart } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const categories = ['All', ...new Set(items.map(item => item.category?.name).filter(Boolean))];

  const filteredItems = items
    .filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(product => selectedCategory === 'All' || product.category?.name === selectedCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortType === 'price-asc') return a.price - b.price;
    if (sortType === 'price-desc') return b.price - a.price;
    if (sortType === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ marginTop: '40px' }}>All Products</h2>
      
      <div className="row mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-2">
          <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mb-2">
          <select className="form-select" value={sortType} onChange={(e) => setSortType(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">a-z</option>
          </select>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {sortedItems.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-dark bg-light shadow-lg">
              {product.images?.[0] && (
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">₹ {product.price}</p>

                <div className="mt-auto d-flex justify-content-between">
                  <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">
                    View
                  </Link>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-success btn-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
