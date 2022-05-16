import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CART_TYPES } from "../store/types";

function itemCard({ data }) {
  const router = useRouter();

  const dispatch = useDispatch();

  const addtoCart = () => {
    dispatch({
      type: CART_TYPES.SET_ITEMS,
      payload: { cartItems: data},
    });
  };

  return (
    <div className="w-full md:w-full rounded-md border-2 border-blue-400 p-2 ">
      <div className="text-center">
        <img className=" m-auto w-40" src={data?.img_url} />
      </div>
      <div className="text-xl">Name {data?.name}</div>
      <div className="text-xs">{data?.description}</div>
      <div className="flex flex-row justify-between">
        <div className="text-base">{data?.price}</div>
        <div className="text-base">Qun: {data?.stock}</div>
      </div>

      <div
        className={
          router?.pathname === "/cart" ? "hidden" : "text-right md:text-center"
        }
        onClick={() => addtoCart()}
      >
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  );
}

export default itemCard;
