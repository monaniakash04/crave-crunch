import React, { useState } from "react";
import Slider from "../components/Slider";
import Cataugory from "../components/Cataugory";
// import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
const Home = ({ cartItemTotal, setCartItemTotal }) => {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Slider />
      <Cataugory setCategory={setCategory} category={category} />
      <Products
        setCategory={setCategory}
        category={category}
        cartItemTotal={cartItemTotal}
        setCartItemTotal={setCartItemTotal}
      />
    </>
  );
};

export default Home;
