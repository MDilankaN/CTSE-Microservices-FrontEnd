import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

function itemCard({ data }) {
  const { items } = useSelector((store) => store?.items);
  console.log(data);
  return (
    <div className="w-44 m-2 rounded-md border-2 border-blue-400 p-2 ">
      <div>
        <img className="w-40" src={data?.img_url} />
      </div>
      <div className="text-xl">Name {data?.name}</div>
      <div className="text-xs">{data?.description}</div>
      <div className="flex flex-row justify-between">
        <div className="text-base">{data?.price}</div>
        <div className="text-base">Qun: {data?.stock}</div>
      </div>

      <div className="text-center"><FontAwesomeIcon icon={faCartShopping}/></div>
    </div>
  );
}

export default itemCard;
