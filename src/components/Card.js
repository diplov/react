import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col">
        <ToastContainer position="top-right" theme="colored" />

        <div className="card">
          <img
            src={`${item.item_image}`}
            alt="..."
            className="card-img-top"
            style={{ height: "400px" }}
          />
          <div className="card-body">
            <h5 className="card-title text-truncate">{item.item_name}</h5>
            <p className="card-text">{item.item_price}</p>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                });
                toast.success("Item Addded to Cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
