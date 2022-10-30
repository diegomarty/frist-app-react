import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifts] = useState([]);

  useEffect(function () {
    getGifs({ keyword })
      .then(gifs => setGifts(gifs))
  }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif id={id} key={id} title={title} url={url} />
  ));
}
