import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import getGifs from "../../services/getGifs";
import ListOfGifs from "../../components/ListOfGifts";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = [
  "Pokemon",
  "Digimon",
  "Harry Potter",
  "Rick and Morty",
  "The Simpsons",
  "The Office",
  "Friends",
  "The Big Bang Theory",
  "The Mandalorian",
  "The Walking Dead",
];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs({ keyword });

  const handleSubmit = (evt) => {
    evt.preventDefault(); // previene de utilizar el comportamiento por defecto del navegador
    console.log(keyword);
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    //actualizamos el useState con el valor del input
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="search ..."
        />
      </form>
      <h3 className="App-title">Los gifs mas polulares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
      <h3 className="App-title">Última busqueda</h3>
      <ListOfGifs gifs={gifs} />
    </>
  );
}
