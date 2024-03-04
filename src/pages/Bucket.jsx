import React from "react";
import ProductCart from "../components/Bucket_Componenets/ProductCart";

const Bucket = ({ cartItemTotal, setCartItemTotal, isAuth }) => {
  return (
    <>
      <div className="text-center text-2xl uppercase mt-5 text-orange-600">
        Your Bucket
      </div>
      <ProductCart
        cartItemTotal={cartItemTotal}
        isAuth={isAuth}
        setCartItemTotal={setCartItemTotal}
      />
    </>
  );
};

export default Bucket;
