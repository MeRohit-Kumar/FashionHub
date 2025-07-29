import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import { toast } from 'react-toastify';
import axios from '../services/axios';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  if (loading) return <div className="text-center mt-5">Loading product...</div>;
  if (!product) return <div className="text-danger mt-5 text-center">Product not found.</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <h4 className="text-success">₹ {product.price}</h4>
          <p className="mt-4">{product.description}</p>

          <button className="btn btn-success mt-3" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
