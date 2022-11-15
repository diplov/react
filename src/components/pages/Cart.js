import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../layouts/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cart_store = useSelector((store) => store.cartStore);
  const cartItems = cart_store.cartitems;
  console.log(cart_store);
  return (
    <>
      <Navbar />
      <h2 className="text-center text-decoration-underline mt-3 mb-2">
        Cart Items
      </h2>
      <div className="container">
        <ToastContainer position="top-right" theme="colored" />

        {cartItems.length > 0 ? (
          <table className="table table-bordered shadow-lg text-center table-hover">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Image</th>
                <th>Product Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={item.item_image}
                        alt="..."
                        style={{ height: "100px" }}
                      />
                    </td>
                    <td>
                      <h5>{item.item_name}</h5>
                      <h6>{item.item_price}</h6>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          });
                          toast.success("Item Removed From Cart");
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={4}>
                  <buttonbtn
                    className="btn-warning"
                    onClick={() => {
                      dispatch({ type: "CLEAR_CART" });
                      toast.success("Removed All Items From Cart");
                    }}
                  >
                    Clear
                  </buttonbtn>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <h5>No items </h5>
        )}
      </div>
    </>
  );
};

export default Cart;
