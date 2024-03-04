//cart card displayer
import React, { useState } from "react";
import ProductCartCard from "./ProductCartCard";
// import ProductTotalBill from "./ProductTotalBill";
import { useSelector } from "react-redux";
import empty from "../../image/undraw_empty_cart_co35.svg";
import "../../index.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ConfirmOrderPopup from "./ConfirmOrderPopup";

const ProductCart = ({ cartItemTotal, setCartItemTotal, isAuth }) => {
  let nav = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const item = useSelector((state) => state.item.item);
  const tottalPrice = useSelector((state) => state.cart.totprice);

  const [popup, setPopup] = useState(false);
  const showToast = () => {
    toast("Your Cart Is Empty");
  };
  // console.log(cart);
  return (
    <>
      <div className=" mt-6 mx-auto flex flex-wrap justify-center">
        {popup && <ConfirmOrderPopup />}
        <Toaster />
        <div className=" gap-2 grid grid-cols-1  md:grid-cols-2 scroll p-3 max-w-[600px] mx-auto overflow-scroll   max-h-[400px]">
          {cart.length === 0 ? (
            <img
              src={empty}
              className="mx-auto duration-500 w-full md:ml-32"
              alt=""
            />
          ) : (
            cart.map((pro, index) => {
              const { id, title, image, price, quantity } = pro;
              // console.log(pro);
              return (
                <ProductCartCard
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  quantity={quantity}
                  // cartItemTotal={cartItemTotal}
                  setCartItemTotal={setCartItemTotal}
                />
              );
            })
          )}
        </div>
        <div className="bg min-w-[300px] md:ml-[-300px] p-3 h-[200px]">
          <h1 className="text-center text-white uppercase font md:text-2xl text-md">
            total bill
          </h1>
          <hr />
          <div className="md:text-xl text-md  flex flex-col">
            <h1 className="text-white  font flex justify-center ">
              Item:
              <span className="">{item}</span>
            </h1>
            <h1 className="text-white font flex justify-center">
              Price:{tottalPrice}
            </h1>
            <h1 className="text-white font flex justify-center">Tax:0</h1>
            <hr />
            <h1 className="font text-white flex justify-center">
              TOTAL BILL:{tottalPrice}
            </h1>
            <button
              onClick={() => {
                if (isAuth) {
                  if (cart.length >= 1) {
                    setPopup(true);
                  } else {
                    showToast();
                  }
                } else {
                  nav("/login");
                }
              }}
              className="font text-black bg-white uppercase"
            >
              ORDER food
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
