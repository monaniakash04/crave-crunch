//home page card displayer
import React, { useEffect, useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import ProductCard from "./ProductCard";
// import data from "../data/demo.json";
import {
  setProducts,
  setPasta,
  setAllProducts,
} from "../Redux/actions/product";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Products = ({ category, cartItemTotal, setCartItemTotal }) => {
  const dispatch = useDispatch();
  const pizza = useSelector((state) => state.pizza.pizzaData);
  const pasta = useSelector((state) => state.pasta.pastaData);
  const allProducts = useSelector((state) => state.allproduct.allProductData);
  // console.log(pizza, "   shshhshsh  ", pasta);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        " https://monaniakash04.github.io/cravecrunch_data/db.json"
      );
      // console.log(result.data);
      dispatch(setProducts(result.data.pizza));
      const pastaData = await axios.get(
        "https://monaniakash04.github.io/cravecrunch_data/db.json"
      );
      dispatch(setPasta(pastaData.data.pasta));
    }
    getData();
  }, []);

  useEffect(() => {
    async function setingcategory() {
      let allproduct_result;
      switch (category) {
        case "all":
          allproduct_result = await axios.get(
            "https://monaniakash04.github.io/cravecrunch_data/db.json"
          );
          dispatch(setAllProducts(allproduct_result.data.all));
          break;
        case "pizza":
          allproduct_result = await axios.get(
            "https://monaniakash04.github.io/cravecrunch_data/db.json"
          );
          dispatch(setAllProducts(allproduct_result.data.pizza));
          break;
        case "bread":
          allproduct_result = await axios.get(
            "https://monaniakash04.github.io/cravecrunch_data/db.json"
          );
          dispatch(setAllProducts(allproduct_result.data.bread));
          break;
        case "sandwich":
          allproduct_result = await axios.get(
            "https://monaniakash04.github.io/cravecrunch_data/db.json"
          );
          dispatch(setAllProducts(allproduct_result.data.sandwich));
          break;
        case "drink":
          allproduct_result = await axios.get(
            "https://monaniakash04.github.io/cravecrunch_data/db.json"
          );
          dispatch(setAllProducts(allproduct_result.data.drink));
          break;
        default:
          console.log("no found");
      }

      // dispatch(setAllProducts(data.all));
    }
    setingcategory();
  }, [category]);
  return (
    <>
      <h1 className="uppercase ml-3  text-4xl text-orange-500 text-center flex justify-center gap-2">
        {category}
        <FaPizzaSlice className="text-orange-500" />
      </h1>
      <div className="max-w-[1230px] mx-auto  min-h-[300px] grid  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center">
        {allProducts.map((pro, index) => {
          const { id, title, image, price, quantity } = pro;
          return (
            <ProductCard
              ids={id}
              title={title}
              index={index}
              image={image}
              price={price}
              quantity={quantity}
              cart={cart}
              setCart={setCart}
              cartItemTotal={cartItemTotal}
              setCartItemTotal={setCartItemTotal}
            />
          );
        })}
      </div>
      <h1 className="uppercase ml-3  text-4xl text-orange-500 text-center flex justify-center gap-2">
        Pizza
        <FaPizzaSlice className="text-orange-500" />
      </h1>
      <div className="max-w-[1230px] mx-auto  min-h-[300px] grid  lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center">
        {pizza.map((pro) => {
          const { id, title, image, price, quantity } = pro;
          return (
            <ProductCard
              ids={id}
              quantity={quantity}
              title={title}
              image={image}
              price={price}
              cartItemTotal={cartItemTotal}
              setCartItemTotal={setCartItemTotal}
            />
          );
        })}
      </div>
      <h1 className="uppercase ml-3  text-4xl text-orange-500 text-center flex justify-center gap-2">
        pasta
        <FaPizzaSlice className="text-orange-500" />
      </h1>
      <div className="max-w-[1230px] mx-auto  min-h-[400px] grid  lg:grid-cols-6 md:grid-cols-4 grid-cols-2 justify-center">
        {pasta.map((pro) => {
          const { id, title, image, price, quantity } = pro;
          return (
            <ProductCard
              ids={id}
              quantity={quantity}
              title={title}
              image={image}
              price={price}
              cartItemTotal={cartItemTotal}
              setCartItemTotal={setCartItemTotal}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
