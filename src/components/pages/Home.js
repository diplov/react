import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import Navbar from "../layouts/Navbar";

const Home = () => {
  const items_store = useSelector((store) => store.itemStore);
  const items = items_store.items;
  console.log(items);
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {items &&
            items.map((item) => {
              return <Card item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
