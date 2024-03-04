//cart card
import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  removeFromCart,
  incrementInCart,
  decrementInCart,
  onChangeCheckPrice,
  checkPrice,
  changePriceOnRemove,
} from "../../Redux/actions/addToCart";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementInItemByIncrementButton,
  decrementInItemByDecrementButton,
  removeItemsFromCart,
} from "../../Redux/actions/CartBill";
import toast, { Toaster } from "react-hot-toast";

const ProductCartCard = ({
  id,
  title,
  image,
  price,
  cartItemTotal,
  quantity,
  setCartItemTotal,
}) => {
  const showToast = () => {
    toast("You can't Decrease");
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="max-w-[300px] text-xs md:text-[16px] mt-0  rounded-md  p-1 h-[70px] bg-orange-500">
      <Toaster />
      <div className="flex gap-2">
        <div className="w-[90px]  md:h-[60px] rounded-md border-2 border-white">
          <img src={image} className="w-full h-full" alt="" />
        </div>
        <div className="w-[150px] p-1   h-[60px] flex flex-col">
          <h1 className=" text-white uppercase">{title.slice()}...</h1>
          <h1 className=" text-white font-bold">{price}/-</h1>
        </div>
        <div className="w-[50px] gap-1  h-[60px] flex flex-col">
          <div className="mx-auto text-xl text-white cursor-pointer">
            <MdDelete
              onClick={() => {
                dispatch(removeFromCart(title));
                dispatch(removeItemsFromCart(quantity));
                dispatch(changePriceOnRemove(id));
                dispatch(checkPrice());
                setCartItemTotal(cart.length - 1);
              }}
            />
          </div>
          <div className="flex">
            <button
              onClick={() => {
                dispatch(incrementInCart(id));
                dispatch(incrementInItemByIncrementButton(1));
                dispatch(onChangeCheckPrice(id, quantity + 1));
                setTimeout(() => {
                  dispatch(checkPrice());
                }, 0);
              }}
              className="h-[20px] my-auto text-md text-white"
            >
              <FaPlusSquare />
            </button>
            <h1 className="my-auto text-md text-white">{quantity}</h1>
            <button
              onClick={() => {
                dispatch(decrementInCart(id));
                if (quantity === 1) {
                  showToast();
                } else {
                  dispatch(decrementInItemByDecrementButton(1));
                }
                dispatch(
                  onChangeCheckPrice(id, quantity === 1 ? 1 : quantity - 1)
                );
                dispatch(checkPrice());
              }}
              className=" h-[20px]   my-auto text-md text-white"
            >
              <FaSquareMinus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
