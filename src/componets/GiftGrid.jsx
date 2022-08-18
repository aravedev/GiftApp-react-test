import React from "react";
import getGifts from "../helpers/getGifts";
import GiftItem from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

export default function GiftGrid({ category }) {
  // Creating a custom hook
  const { images, isLoading } = useFetchGifts(category);
  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="">
        {images.map((e) => (
          <GiftItem key={e.id} {...e} title={e.title} />
        ))}
      </div>
    </>
  );
}
