import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifts";
import { useGifs } from "../../hooks/useGifs";
import Category from "../../components/Category";
import TrendingSearches from "../../components/TrendingSearches";

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
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    //actualizamos el useState con el valor del input
    setKeyword(evt.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div className="App-category">
          <TrendingSearches/>
        </div>
      </div>
    </>
  );
}
