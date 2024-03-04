//home page product card
import React from "react";
import "../index.css";
import { FaPlus } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {
  addToCart,
  onChangeCheckPrice,
  checkPrice,
} from "../Redux/actions/addToCart";
import { useDispatch, useSelector } from "react-redux";
import { incrementInItem } from "../Redux/actions/CartBill";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({
  ids,
  title,
  image,
  price,
  index,
  cartItemTotal,
  setCartItemTotal,
  quantity,
}) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const showToaster = () => {
    toast.success(`${title} Is Added In Cart`, {
      position: "top-right",
      icon: "👍",
      className: "bg",
      duration: 3000,
    });
  };
  const alreadyToaster = () => {
    toast.error(`${title} Is Already In Cart`);
  };
  return (
    <>
      <div
        key={index}
        className="max-w-[180px] card  m-3 p-2    h-[235px] rounded-lg bg "
      >
        <Toaster />
        <div className="max-w-[160px] relative  mx-auto  h-[150px]">
          <div className="absolute   left-28 md:left-32 mt-1  md:ml-0  ml-[-1px]">
            <FaPlus
              color="white"
              onClick={async () => {
                let count = cart.filter((item) => {
                  return item.id === ids;
                });
                if (count.length === 0) {
                  let result;
                  let indexOfData;
                  if (ids >= 1 && ids <= 6) {
                    result = await axios.get(
                      "https://monaniakash04.github.io/cravecrunch_data/db.json"
                    );
                    const idxOfData = result.data.pizza.map((item, index) => {
                      const { id } = item;
                      if (id === ids) {
                        return index;
                      }
                    });
                    for (let i = 0; i <= idxOfData.length; i++) {
                      if (idxOfData[i] !== undefined) {
                        indexOfData = i;
                      }
                    }
                    console.log(result.data.pizza[indexOfData]);
                    dispatch(addToCart(result.data.pizza[indexOfData]));
                  } else if (ids >= 7 && ids <= 12) {
                    result = await axios.get(
                      "https://monaniakash04.github.io/cravecrunch_data/db.json"
                    );
                    const idxOfData = result.data.pasta.map((item, index) => {
                      const { id } = item;
                      if (id === ids) {
                        return index;
                      }
                    });
                    for (let i = 0; i <= idxOfData.length; i++) {
                      if (idxOfData[i] !== undefined) {
                        indexOfData = i;
                      }
                    }
                    console.log(result.data.pasta[indexOfData]);
                    dispatch(addToCart(result.data.pasta[indexOfData]));
                  } else if (ids >= 13 && ids <= 18) {
                    result = await axios.get(
                      "https://monaniakash04.github.io/cravecrunch_data/db.json"
                    );
                    const idxOfData = result.data.bread.map((item, index) => {
                      const { id } = item;
                      if (id === ids) {
                        return index;
                      }
                    });
                    for (let i = 0; i <= idxOfData.length; i++) {
                      if (idxOfData[i] !== undefined) {
                        indexOfData = i;
                      }
                    }
                    console.log(result.data.bread[indexOfData]);
                    dispatch(addToCart(result.data.bread[indexOfData]));
                  } else if (ids >= 19 && ids <= 24) {
                    result = await axios.get(
                      "https://monaniakash04.github.io/cravecrunch_data/db.json"
                    );
                    const idxOfData = result.data.sandwich.map(
                      (item, index) => {
                        const { id } = item;
                        if (id === ids) {
                          return index;
                        }
                      }
                    );
                    for (let i = 0; i <= idxOfData.length; i++) {
                      if (idxOfData[i] !== undefined) {
                        indexOfData = i;
                      }
                    }
                    console.log(result.data.sandwich[indexOfData]);
                    dispatch(addToCart(result.data.sandwich[indexOfData]));
                  } else if (ids >= 25 && ids <= 30) {
                    result = await axios.get(
                      "https://monaniakash04.github.io/cravecrunch_data/db.json"
                    );
                    const idxOfData = result.data.drink.map((item, index) => {
                      const { id } = item;
                      if (id === ids) {
                        return index;
                      }
                    });
                    for (let i = 0; i <= idxOfData.length; i++) {
                      if (idxOfData[i] !== undefined) {
                        indexOfData = i;
                      }
                    }
                    console.log(result.data.drink[indexOfData]);
                    dispatch(addToCart(result.data.drink[indexOfData]));
                  }
                  setCartItemTotal(cart.length + 1);
                  dispatch(incrementInItem());
                  dispatch(onChangeCheckPrice(ids, 1));
                  dispatch(checkPrice());
                  showToaster();
                } else {
                  alreadyToaster();
                  // alert("already");
                }
              }}
              className="text-center icon  bg rounded-md p-1 text-xl"
            />
          </div>
          <img src={image} className="w-full h-full rounded-lg " alt="" />
        </div>
        <div className="max-w-[190px] flex-col flex  mx-auto max-h-[100px]">
          <div className="flex gap-2">
            {" "}
            <h1 className="text-white">{title}</h1>
            <h1 className="text-white my-auto font-bold text-lg">{price}/-</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
