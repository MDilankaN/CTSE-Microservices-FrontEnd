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

  const sampleData = [{
    description: "Samsung Galaxy Note 10+ N975U1 ATT T-Mob Verizon Factory Unlocked - VERY GOOD -",
    id: 8,
    img_url: 'https://i.ebayimg.com/images/g/FX8AAOSwgCpiVdRz/s-l500.jpg',
    name: "Samsung Galaxy Note 10+",
    price: "US $364.99",
    stock: 1,
  },{
    description: "Nike Free Run 2 Light Photo Blue Orange Midnight Navy 537732-403 Size 8-13 NEW",
    id: 8,
    img_url: 'https://i.ebayimg.com/images/g/jYsAAOSwsxNhUmt5/s-l1600.png',
    name: "Nike Free Run 2 Light",
    price: "US $75.88",
    stock: 1,
  },{
    description: "Invicta Men's Watch Pro Diver Quartz Dive Blue Dial Silver Tone Bracelet 9204OB",
    id: 8,
    img_url: 'https://i.ebayimg.com/images/g/gjcAAOSwwFxg2jEs/s-l1600.jpg',
    name: "Invicta Men's Watch Pro",
    price: "US $50.66",
    stock: 1,
  },{
    description: "10K Yellow Gold Light 1.5mm-4mm Diamond Cut Rope Chain Pendant Necklace 14- 30",
    id: 8,
    img_url: 'https://i.ebayimg.com/images/g/tCcAAOSwoZFiT3a4/s-l1600.jpg',
    name: "10K Yellow Gold Necklace",
    price: "US $153.99",
    stock: 1,
  }];

  console.log(items?.length);

  return (
    <div>
      <Head>
        <title>Sample Store</title>
      </Head>
      <Navbar />
      <div className="mx-2 grid grid-cols-1 md:grid-cols-4 gap-2">
      {sampleData && sampleData?.map((item) => <ItemCard data={item} />)}
        {items && items?.map((item) => <ItemCard data={item} />)}
      </div>
    </div>
  );
}
