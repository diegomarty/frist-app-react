import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  console.log({ params });
  console.log(params);

  const { keyword } = params;
  console.log({ keyword });
  const [gifs, setGifts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => setGifts(gifs), setLoading(false));
    },
    [keyword]
  );

    if (loading) return <i>Cargando 🔻</i>

  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
