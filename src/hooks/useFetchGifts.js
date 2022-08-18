import { useState } from "react";
import getGifts from "../helpers/getGifts";
import { useEffect } from "react";

////////////////////////////////////////////////
export const useFetchGifts = (category) => {
  const [images, setImages] = useState([]);

  /////////////////////
  /* Creating isLoading to display info if the data is loading or not */
  ////////////////

  const [isLoading, setIsLoading] = useState(true);

  ///////////////////////////////////
  const getImages = async () => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();

    return () => {
      console.log("cleaned");
    };
  }, [category]);

  ////////////////////////////////////////////
  // sending images from line 7 to the object below and isLoading from line 13
  ///////////////////////////////////////
  return {
    images: images,
    isLoading: isLoading,
  };
};
