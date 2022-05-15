import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { STORE_TYPES } from "../store/types";
import styles from "../styles/Home.module.css";
import { getItems } from "./api/hello";
import ItemCard from "../Components/itemCard";

export default function Home() {
  const { items } = useSelector((store) => store?.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items?.length === 0) {
      getItemList();
    }
  }, [items]);

  const getItemList = async () => {
    const res = await getItems();
    dispatch({
      type: STORE_TYPES.SET_ITEMS,
      payload: { items: res?.data },
    });
  };

  const sampleData = {
    description: "Samsung Galaxy Note 10+ N975U1 ATT T-Mob Verizon Factory Unlocked - VERY GOOD -",
    id: 8,
    img_url: 'https://i.ebayimg.com/images/g/FX8AAOSwgCpiVdRz/s-l500.jpg',
    name: "Samsung Galaxy Note 10+",
    price: "US $364.99",
    stock: 1,
  };

  console.log(items?.length);

  return (
    <div>
      <Head>
        <title>Sample Store</title>
      </Head>
      <Navbar />
      <div className="m-auto">
        <ItemCard data={sampleData} />
        {items && items?.map((item) => <ItemCard data={item} />)}
      </div>
    </div>
  );
}
