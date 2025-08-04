import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart,incrementQty,decrementQty,} from "../redux/slices/CartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2 style={{ marginTop: "50px" }}>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div
                  className="d-flex align-items-center"
                  style={{ width: "60%" }}
                >
                  {item.images?.[0] && (
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }}
                    />
                  )}

                  <div>
                    <h5>{item.title}</h5>
                    <p>
                      ₹ {item.price} x {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="btn-group">
                  <button
                    onClick={() => {
                      dispatch(decrementQty(item.id));
                      toast.info(`Decreased quantity of ${item.title}`, {
                        autoClose: 1000,
                      });
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      dispatch(incrementQty(item.id));
                      toast.success(`Increased quantity of ${item.title}`, {
                        autoClose: 1000,
                      });
                    }}
                    className="btn btn-sm btn-warning"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.error(`${item.title} removed from cart`, {
                      autoClose: 1000,
                    });
                  }}
                  className="btn btn-sm btn-danger"
                >
                  <i className="bi bi-trash"></i> Remove
                </button>
              </li>
            ))}
          </ul>

          <h4>Total: ₹ {total}</h4>

          <button
            onClick={() => navigate("/")}
            className="btn btn-outline-primary mt-3"
          >
            ← Back to Shopping
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
