import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  //efecto que se ejecuta cada vez que el componente se reenderiza
  //y cambian las dependecnias del array [keyword]
  useEffect(
    function () {
      setLoading(true);

      // recuperamos la keyword del localStorage
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

      console.log(localStorage)
      getGifs({ keyword: keywordToUse }).then((gifs) => {
          setGifs(gifs);
          setLoading(false);
          //guardamos la keyword en el localStorage
          localStorage.setItem('lastKeyword', keyword)
      });
    },
    [keyword]
  );

  return { loading, gifs };
}
